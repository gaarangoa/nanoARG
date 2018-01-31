from tools.deepARGClass import DeepARG as ALIGNER
from tools.bestLocalHitClass import BestLocalHit as BestHit
import conf

_IDEN = 30
_EVALUE = 1e-10
_COVERAGE = 0.5
_BITSCORE = 50
class ARGs():
    def __init__(self, input):
        self.info=""
        self.input = input
        self.database_name = "deeparg"
        self.aligner = ALIGNER();
        self.reference = conf.data+self.database_name+".dmnd"
        self.alignment_file = input+".mge.aln"
        self.observable_file = input+".mge.aln.bed.clusters.bestHit.annotated."+self.database_name+".json"
        self.postprocess_file = input+".mge.alg.annotated."+self.database_name+".json"
    
    def align(self):
        parameters= {
            "--iden":30,
            "--prob":0.8,
            "--evalue": 1e-10,
            "--coverage": 0.5,
            "--nk": 200
        }
        self.aligner.align(self.input, self.reference, self.alignment_file, parameters)

    def postprocess(self):
        annotation = BestHit(conf.data+self.database_name+".size", _IDEN, _EVALUE, _COVERAGE, _BITSCORE)
        annotation.quant(self.alignment_file, self.database_name)

