from tools.diamondClass import diamond as ALIGNER
from tools.bestLocalHitClass import BestLocalHit as BestHit
from tools.deepARGClass import DeepARG
import conf

_IDEN = 20
_EVALUE = 1e-5
_COVERAGE = 0
_BITSCORE = 0
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
            "--id":20,
            "--evalue": 1e-5,
            "-k": 15000
        }
        # self.aligner.align(self.input, self.reference, self.alignment_file, parameters)

        # DeepARG
        parameters= {
            "--iden":20,
            "--evalue": 1e-5,
            "--nk": 1500,
            "--prob": 0.4, #very permisive parameters
            "--coverage": 0.0
        }

        self.deeparg = DeepARG()
        self.deeparg.preprocess(self.alignment_file, conf.data+self.database_name+".size")
        self.deeparg.predict(self.alignment_file, self.reference, self.alignment_file+".dl", parameters)
        self.deeparg.postprocess(self.alignment_file+'.tmp')

    def postprocess(self):
        annotation = BestHit(conf.data+self.database_name+".size", _IDEN, _EVALUE, _COVERAGE, _BITSCORE)
        annotation.quant(self.alignment_file, self.database_name)

