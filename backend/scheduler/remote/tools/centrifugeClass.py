import sys, os
import conf
class Centrifuge():
    def __init__(self):
        self.bin = conf.tools

    def makedb(self):
        return 0

    def align(self, query, reference, output, parameters):
        options = " ".join([i+" "+str(parameters[i]) for i in parameters])
        cmd = self.bin + "centrifuge-1.0.3-beta/centrifuge "+options+" --f -x "+reference+' -U '+query+" --report "+output+" > "+output+".reads"
        # os.system(cmd)
        print(cmd)
        return True
