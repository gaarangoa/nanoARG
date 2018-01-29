from Bio.Data import CodonTable
import os

from remote.utils import _cores

class hmmer():
    def __init__(self):
        self.info = 'HMMER ';
    def get_open_reading_frames(self, input):
        cmd = "/home/gustavo1/tools/EMBOSS-6.6.0/emboss/transeq -frame 6 -clean -sequence "+input+" -outseq "+input+".rf"
        os.system(cmd)
    
    def hmm2blast(self, input, output):
        fo = open(output, 'w');
        HMMTAGS = {i.strip().split('\t')[0]:(i.strip().split('\t')[0]+"|FEATURES|RESFAMS|"+i.strip().split('\t')[1]+"|"+i.strip().split('\t')[2]).replace(" ","_") for i in open("/groups/metastorm_cscee/ARGpore/tools/Resfams-full.dsc")}; 
        for i in open(input):
            if i[0] == "#": continue
            i = i.strip().split();
            try:
                line = "\t".join(["_".join(i[3].split("_")[:-1]), HMMTAGS[i[1]], str(100*float(i[21])), str(int(i[18])-int(i[17])), '0', '0', i[17], i[18], i[15], i[16], i[6], i[7]]) + '\n';
            except:
                line = "\t".join(["_".join(i[3].split("_")[:-1]), i[1]+"|FEATURES|RESFAMS|unknown|unknown", str(100*float(i[21])), str(int(i[18])-int(i[17])), '0', '0', i[17], i[18], i[15], i[16], i[6], i[7]]) + '\n';
            fo.write(line);

    def align(self, input):
        input = '/'.join(input.split('/')[:-1])+"/demux.corrected.merged";
        self.get_open_reading_frames(input);
        cmd = "hmmscan --domtblout "+input+".resfams.tbl --noali --cpu "+_cores+" /groups/metastorm_cscee/ARGpore/tools/Resfams-full.hmm "+input+".rf";
        os.system(cmd);
        fo = '/'.join(input.split('/')[:-1])+"/demux.corrected.merged.resfams.aligned";
        self.hmm2blast(input+'.resfams.tbl', fo);
        return fo