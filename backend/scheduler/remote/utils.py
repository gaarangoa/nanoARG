import os
import errno 
import json
from Bio import SeqIO

import conf

TOOLS=conf.tools;
DATA=conf.data;
DIAMOND_DATABASE = '/groups/metastorm_cscee/deepARG/deeparg-ss/database/';
TRUE_POSITIVES = "/groups/metastorm_cscee/ARGpore/data/bacterial_genomes/RawAlignments/reinforce_correction/true_positives.fasta"
_cores = "6";


class demux_poreFUME():
    def __init__(self):
        self.info = 'Trim out barcodes using poreFUME tools'
    def barcodes(self, input, barcodes, outdir):
        cmd = 'cd '+outdir+' && python '+TOOLS+'poreFUME.py --skipNanocorrect --skipNanopolish --skipCARD --PacBioLegacyBarcode --overwriteDemux --barcodeThreshold 30 --barcodeEdge 100 ' + input + " " + barcodes;
        os.system(cmd);
        cmd = 'cat '+outdir+'/output/barcode/rawreads/* >'+outdir+'/demux'
        os.system(cmd)
        return outdir+'/demux'

class demux_hash():
    def __init__(self):
        self.info = "This is a perl script to trim out barcode sequences"
    def barcodes(self, fasta_file, barcodes_file, outdir):
        os.system(''' awk '{if($_~/>/){gsub(">","",$_); x=$_; getline; print x"\t"$_}}' '''+barcodes_file + '>' + barcodes_file+'.tmp');
        ############################################################### 
        # TODO: BARCODES RETURNS THE SEQUENCE ID NOT THE FULL SEQUENCE:
        ############################################################### 
        # os.system('mv '+barcodes_file+".tmp "+barcodes_file)
        # cmd = 'cat '+fasta_file+' | '+TOOLS+'fastx_barcode_splitter.pl --bcfile ' + barcodes_file +".tmp" + ' --bol --partial 0 --mismatches 0 --prefix '+ fasta_file+'.BC.bol.'
        # os.system(cmd)
        # os.system("cat "+outdir+"/*.bol.* > "+outdir+'/demux')
        # os.system("cat "+TRUE_POSITIVES+" "+outdir+'/demux.t'+" > "+outdir+'/demux && rm '+outdir+'/demux.t')
        os.system("cp "+fasta_file+" "+outdir+"/demux");
        return outdir+'/demux'

class canu():
    def __init__(self):
        self.info = "This is the canu assembler please see the documentation"
    def remove_seq_by_tag(self, input_file, output_file):
        data = []
        for record in SeqIO.parse(input_file, "fasta"):
            if not 'ARG_TRUE_POSITIVES|' in record.id:
                record.name = ''
                record.description = ''
                data.append(record)
        SeqIO.write(data, open(output_file, 'w'), 'fasta') 
    def correct(self, input_file):
        cmd = TOOLS+'/bin/canu -correct -p canu -d ' +  "/".join(input_file.split("/")[:-1])+'/canu' + ' useGrid=false  gnuplotTested=true genomeSize=2.5M -nanopore-raw ' + input_file + ' correctedErrorRate=0.2 '
        print(cmd)
        os.system(cmd)
        fo = '/'.join(input_file.split('/')[:-1])+"/demux.corrected";
        cmd = 'zcat ' + "/".join(input_file.split("/")[:-1])+"/canu/canu.correctedReads.fasta.gz > " +fo+"";
        print(cmd)
        os.system(cmd)
        # remove this line to not merge known args
        # self.remove_seq_by_tag(fo+'.tmp', fo);
        return fo

class rawreads():
    def __init__(self):
        self.info='Get from the raw dataset the reads that were not corrected and merge them to the corrected dataset';
    def merge(self, corrected):
        input = "/".join(corrected.split('/')[:-1])+'/rawreads.fasta'
        C = {i.id:i.seq for i in SeqIO.parse(corrected, 'fasta')}
        R = [i for i in SeqIO.parse(input, "fasta")]
        #
        for i in R:
            try:
                i.seq = C[i.id]
            except:
                pass
        fo = '/'.join(input.split('/')[:-1])+"/demux.corrected.merged";
        SeqIO.write(R, open(fo, 'w'), 'fasta')
        self.output = fo;
        return fo


class diamond():
    def __init__(self):
        self.info = 'diamond wrapper';
        self.subject = DIAMOND_DATABASE+'features'
        self.bin = TOOLS+'diamond'
    def align(self, query, options='-k 10000 --sensitive --id 0 -e 1'):
        cmd = self.bin + '  blastx -q '+query+' -d '+self.subject + ' ' + options +' -a '+ query + '.aln'
        os.system(cmd)
        fo = '/'.join(query.split('/')[:-1])+"/demux.corrected.merged.aligned";
        cmd = self.bin+' view -a '+query+'.aln.daa '+' -o '+ fo
        os.system(cmd)
        return fo


class blastn():
    def __init__(self):
        self.info = "This class performs blastn"
        self.subject = DATA+'megares.noSNPs.format.fasta';
    def align(self, query, options='  -evalue 10 -perc_identity 10 -max_target_seqs 10000 -outfmt 6'):
        fo = '/'.join(query.split('/')[:-1])+"/demux.corrected.merged.aligned";
        cmd  = TOOLS+'blastn -db '+self.subject+' -query '+query+' -out ' + fo + options
        os.system(cmd)
        return fo

from Bio.Data import CodonTable

class hmmer():
    def __init__(self):
        self.info = 'HMMER ';
    def get_open_reading_frames(self, input):
        cmd = "/home/gustavo1/tools/EMBOSS-6.6.0/emboss/transeq -frame 6 -clean -sequence "+input+" -outseq "+input+".rf"
        os.system(cmd)
    
    def hmm2blast(self, input, output):
        fo = open(output, 'w');
        HMMTAGS = {i.strip().split('\t')[0]:(i.strip().split('\t')[0]+"|FEATURES|RESFAMS|"+i.strip().split('\t')[1]+"|"+i.strip().split('\t')[2]).replace(" ","_") for i in open(conf.tools+"Resfams-full.dsc")}; 
        for i in open(input):
            if i[0] == "#": continue
            i = i.strip().split();
            try:
                line = "\t".join(["_".join(i[3].split("_")[:-1]), HMMTAGS[i[1]], str(100*float(i[21])), str(int(i[18])-int(i[17])), '0', '0', i[17], i[18], i[15], i[16], i[6], i[7]]) + '\n';
            except:
                line = "\t".join(["_".join(i[3].split("_")[:-1]), i[1]+"|FEATURES|RESFAMS|unknown|unknown", str(100*float(i[21])), str(int(i[18])-int(i[17])), '0', '0', i[17], i[18], i[15], i[16], i[6], i[7]]) + '\n';
            fo.write(line);

    def align(self, input):
        self.get_open_reading_frames(input);
        cmd = "hmmscan --domtblout "+input+".tbl --noali --cpu "+_cores+" "+conf.tools+"Resfams-full.hmm "+input+".rf";
        os.system(cmd);
        fo = '/'.join(input.split('/')[:-1])+"/demux.corrected.merged.resfams.aligned";
        self.hmm2blast(input+'.tbl', fo);


class bestHit():
    def __init__(self):
        self.info = "This class contains the annotation based on the best hit approach"
    def quant(self, input):
        T = {}
        for i in open(input):
            i = i.split();
            if float(i[2])<30: continue # minimum identity 30%
            if float(i[10])>1e-10: continue # minimum id 1e-10
            if int(i[3]) < 70: continue # minimum coverage 210nt
            try:
                if T[i][1]<float(i[11]):
                    T[i] = [i[1], float(i[11])]
            except:
                T[i[0]]=[i[1],float(i[11])]
        type = {}
        subtype = {}
        for bh in T:
            key = T[bh][0].split('|')
            try:
                type[key[3]]+=1
            except:
                type[key[3]]=1
            try:
                subtype[key[4].upper()]+=1
            except:
                subtype[key[4].upper()]=1
        fox = '/'.join(input.split('/')[:-1])+"/demux.corrected.merged.aligned";
        fo = open(fox+'.type','w');
        json.dump(type, fo);
        fo.close();
        # for i in type:
        #     fo.write("\t".join([i, str(type[i])])+"\n");
        # fo.close();
        fo = open(fox+'.subtype','w');
        json.dump(subtype, fo);
        fo.close();

        fo = open(fox+'.annotated.json','w');
        result = {"type":type, "subtype":subtype}
        json.dump(result, fo);
        fo.close();

        # for i in subtype:
        #     fo.write("\t".join([i, str(subtype[i])])+"\n");
        # fo.close();
        return {'type':input+'.type', 'subtype':input+'.subtype'}

   

def mkdir_p(path):
    try:   
        os.makedirs(path)
    except OSError as exc:  # Python >2.5
        if exc.errno == errno.EEXIST and os.path.isdir(path):
            pass
        else:
            raise

class bwa():
    def __init__(self):
        self.info = "BWA aligner"
    
    def index(self, input_file):
        cmd = 'bwa index '+ input_file
    
    def align(self, input_file, reference):
        cmd = 'bwa mem -x ont2d -t 8 '+reference+' '+input_file;


class samtools():
    def __init__(self):
        self.info = "samtools sam manipulation tools"

    def view(self, input_file):
        cmd = 'samtools view -Sb ' + input_file + ' > ' + input_file+".bam"
        os.system(cmd)

    def sort(self, input_file):
         cmd = 'samtools sort -f ' +  input_file + " > " + input_file+'.sorted.bam'
         os.system(cmd)
    
    def index(self, input_data):
        cmd = 'samtools index '+input_data


class bestLocalHit():
    def __init__(self, arglen, iden, evalue, cov, bitscore):
        self.info = 'quantification using bedtools clustering'
        self.arglen = arglen
        self.iden = iden
        self.evalue = evalue
        self.cov = cov
        self.bitscore = bitscore

    def quant(self, input, database):
        from validation.AnnotationMethods import quant as Quant
        Quant(input, self.arglen, self.iden, self.evalue, self.cov, self.bitscore, database)



# for i in open('Resfams-full.size'):
#     try:
#         print ">"+HMMTAGS[i.strip().split()[0].replace('>',"")]+"\t"+i.split()[1]
#     except:
#         print i.strip().split()[0]+"|FEATURES|RESFAMS|unknown|unknown\t"+i.split()[1]


