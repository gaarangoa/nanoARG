from tools.diamondClass import diamond as ALIGNER
from tools.bestLocalHitClass import BestLocalHit as BestHit
import conf

_IDEN = 30
_EVALUE = 1e-10
_COVERAGE = 0.5
_BITSCORE = 50
class MGEs():
    def __init__(self, input):
        self.info=""
        self.input = input
        self.database_name = "aclame"
        self.aligner = ALIGNER();
        self.reference = conf.data+self.database_name+".dmnd"
        self.alignment_file = input+"."+self.database_name+".aln"
        self.observable_file = input+"."+self.database_name+".aln.bed.clusters.bestHit.annotated."+self.database_name+".json"
        self.postprocess_file = input+"."+self.database_name+".alg.annotated."+self.database_name+".json"
    
    def align(self):
        parameters= {
            "--id":30,
            "-k": 500,
            "--evalue": 1e-10
        }
        self.aligner.align(self.input, self.reference, self.alignment_file, parameters)

    def postprocess(self):
        annotation = BestHit(conf.data+self.database_name+".size", _IDEN, _EVALUE, _COVERAGE, _BITSCORE)
        annotation.quant(self.alignment_file, self.database_name)

