from tools.diamondClass import diamond as ALIGNER
from tools.bestLocalHitClass import BestLocalHit as BestHit
import conf

_IDEN = 30
_EVALUE = 1e-10
_COVERAGE = 0.5
_BITSCORE = 50
class MGEs():
    def __init__(self):
        self.info=""
        self.aligner = ALIGNER();
        self.reference = conf.data+"aclame.dmnd"
    
    def align(self, input):
        parameters= {
            "--id":30,
            "-k":500,
            "--evalue": 1e-10
        }
        self.alignment_file = query+".mge.aln"
        self.aligner.align(input, self.reference, self.alignment_file, parameters)
        return self.output

    def postprocess(self):
        mges_annotation = BestHit(conf.data+"aclame.size", _IDEN, _EVALUE, _COVERAGE, _BITSCORE)
        mges_aligned_file = mges_annotation.align(self.alignment_file)
        self.postprocess_file = mges_annotation.quant(mges_aligned_file, 'aclame')
        return self.postprocess_file
        

# how to run it!
# mges = MGEs()
# mges.align("/groups/metastorm_cscee/ARGpore/storage/58efd3bc71308bb32b1b155f/58e0471756417d9b3c7428cb/demux.corrected.merged")
