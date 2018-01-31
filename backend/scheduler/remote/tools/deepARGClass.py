import sys, os
import conf
class DeepARG():
    def __init__(self):
        self.bin = conf.tools

    def makedb(self):
        return 0

    def align(self, query, reference, output, parameters):
        options = " ".join([i+" "+str(parameters[i]) for i in parameters])
        cmd = "source /groups/metastorm_cscee/deeparg/venv/bin/activate && "+ self.bin + "python /groups/metastorm_cscee/deeparg/deeparg-ss/deepARG.py  --align --genes --type nucl --input "+query+" --output "+output+"  "+ options
        os.system(cmd)

        return True
