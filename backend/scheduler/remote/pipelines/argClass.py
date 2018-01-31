from tools.diamondClass import diamond as ALIGNER
from tools.bestLocalHitClass import BestLocalHit as BestHit
from tools.deepARGClass import DeepARG 
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
        self.aligner = ALIGNER()
        self.reference = conf.data+self.database_name+".dmnd"
        self.alignment_file = input+"."+self.database_name+".aln"
        self.observable_file = input+"."+self.database_name+".aln.bed.clusters.bestHit.annotated."+self.database_name+".json"
        self.postprocess_file = input+"."+self.database_name+".alg.annotated."+self.database_name+".json"
    
    def align(self):
        # Sequence Alignment
        parameters= {
            "--id":30,
            "--evalue": 1e-10,
            "-k": 10000
        }
        self.aligner.align(self.input, self.reference, self.alignment_file, parameters)

        # DeepARG
        parameters= {
            "--iden":20,
            "--evalue": 1e-10,
            "--nk": 10000,
            "--prob": 0.8,
            "--coverage": 0.0
        }

        self.deeparg = DeepARG()
        self.deeparg.preprocess(self.alignment_file)
        self.deeparg.predict(self.alignment_file, self.reference, self.alignment_file+".dl", parameters)
        self.deeparg.postprocess(self.alignment_file)

    def postprocess(self):
        annotation = BestHit(conf.data+self.database_name+".size", _IDEN, _EVALUE, _COVERAGE, _BITSCORE)
        annotation.quant(self.alignment_file, self.database_name)

