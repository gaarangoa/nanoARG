
from tools.centrifugeClass import Centrifuge as ALIGNER
import conf
import json

class Taxonomy():
    def __init__(self, input, database):
        self.info=""
        self.input = input
        self.database_name = database
        self.aligner = ALIGNER();
        self.reference = conf.data+self.database_name
        self.alignment_file = input+"."+self.database_name+".aln"
        self.observable_file = input+"."+self.database_name+".aln.bed.clusters.bestHit.annotated."+self.database_name+".json"
    
    def align(self):
        parameters= {
            "-f":""
        }

        self.aligner.align(self.input, self.reference, self.alignment_file, parameters)

    def postprocess(self):
        
        taxo_data = {}
        _ix = True
        for i in open(self.alignment_file):
            if _ix: _ix = False; continue
            i = i.split("\t")
            taxo_data[i[1]] = {
                "name": i[0],
                "tax_id": i[1],
                "rax_rank": i[2],
                "genome_size": int(i[3]),
                "num_reads": int(i[4]),
            }

        reads_data = {}
        _ix = True
        for i in open(self.alignment_file+'.reads'):
            if _ix: _ix = False; continue
            i = i.split("\t")
            reads_data[i[0]] = {
                "id": i[0],
                "tax_id": i[2],
                "qlength": int(i[6]),
            }
        
        json.dump({"taxo": taxo_data, "reads": reads_data}, open(self.observable_file))



#  $CENTRIFUGE_HOME/centrifuge -f -x $CENTRIFUGE_HOME/p_compressed+h+v  -U 1517427947869_rawreads.fasta --report report.taxa > reads.taxa