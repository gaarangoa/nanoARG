from remote.tools.diamondClass import diamond as ALIGNER
from remote.utils import bestLocalHit as BLH

class MGEs():
    def __init__(self):
        self.info=""
        self.aligner = ALIGNER();
        self.reference = "/groups/metastorm_cscee/ARGpore/data/aclame.dmnd"
    
    def align(self, input):
        query = '/'.join(input.split('/')[:-1])+"/demux.corrected.merged";
        parameters= {
            "--id":30,
            "-k":500,
            "--evalue": 1e-10
        }
        self.output = query+".mge.aln"
        self.aligner.align(query, self.reference, self.output, parameters)
        return self.output

# how to run it!
# mges = MGEs()
# mges.align("/groups/metastorm_cscee/ARGpore/storage/58efd3bc71308bb32b1b155f/58e0471756417d9b3c7428cb/demux.corrected.merged")
