
from tools.centrifugeClass import Centrifuge as ALIGNER
from tools.bestLocalHitClass import BestLocalHit as BestHit
import conf


class Taxonomy():
    def __init__(self, input, database):
        self.info=""
        self.input = input
        self.database_name = database
        self.aligner = ALIGNER();
        self.reference = conf.data+self.database_name
        self.alignment_file = input+"."+self.database_name+".aln"
        self.observable_file = input+"."+self.database_name+".aln.bed.clusters.bestHit.annotated."+self.database_name+".json"
        self.postprocess_file = input+"."+self.database_name+".alg.annotated."+self.database_name+".json"
    
    def align(self):
        parameters= {
            "--f":""
        }
        print("here------------")
        self.aligner.align(self.input, self.reference, self.alignment_file, parameters)

    def postprocess(self):
        # annotation = BestHit(conf.data+self.database_name+".size", _IDEN, _EVALUE, _COVERAGE, _BITSCORE)
        # annotation.quant(self.alignment_file, self.database_name)
        pass



#  $CENTRIFUGE_HOME/centrifuge -f -x $CENTRIFUGE_HOME/p_compressed+h+v  -U 1517427947869_rawreads.fasta --report report.taxa > reads.taxa