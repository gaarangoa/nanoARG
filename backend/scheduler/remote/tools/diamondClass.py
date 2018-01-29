import sys, os
import conf
class diamond():
    def __init__(self):
        self.bin = conf.tools

    def makedb(self):
        return 0

    def align(self, query, reference, output, parameters):
        options = " ".join([i+" "+str(parameters[i]) for i in parameters])
        cmd = self.bin + "diamond blastx --query "+query+" --db "+reference+" --out "+output+" --outfmt 6 --sensitive "+ options
        os.system(cmd)

        return True
