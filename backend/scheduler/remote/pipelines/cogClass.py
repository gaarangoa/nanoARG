from remote.tools.diamondClass import diamond as ALIGNER
from remote.utils import bestLocalHit as BLH

import conf

class MGEs():
    def __init__(self):
        self.info=""
        self.aligner = ALIGNER();
        self.reference = conf.data+"aclame.dmnd"
    
    def align(self, query):
        parameters= {
            "--id":30,
            "-k":500,
            "--evalue": 1e-10
        }
        self.output = query+".mge.aln"
        self.aligner.align(query, self.reference, self.output, parameters)
        return self.output

