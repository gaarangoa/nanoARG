import sys, os
import conf
class DeepARG():
    def __init__(self):
        self.bin = conf.tools

    def makedb(self):
        return 0

    def align(self, query, reference, output, parameters):
        options = " ".join([i+" "+str(parameters[i]) for i in parameters])
        cmd = "source /groups/metastorm_cscee/deeparg/venv/bin/activate && "+" python /groups/metastorm_cscee/deeparg/deeparg-ss/deepARG.py  --align --genes --type nucl --input "+query+" --output "+output+"  "+ options
        print("running deepARG:", cmd)
        try:
            os.system(cmd)
        except Exception as inst:
            os.system('echo "'+str(inst)+" >> "+ output)
        return True

    def predict(self, query, reference, output, parameters):
        options = " ".join([i+" "+str(parameters[i]) for i in parameters])
        cmd = "source /groups/metastorm_cscee/deeparg/venv/bin/activate && "+" python /groups/metastorm_cscee/deeparg/deeparg-ss/deepARG.py  --predict --genes --type nucl --input "+query+" --output "+output+"  "+ options
        print("running deepARG:", cmd)
        try:
            os.system(cmd)
        except Exception as inst:
            os.system('echo "'+str(inst)+" >> "+ output)
        return True

    def preprocess(self, input_file):
        fo = open(input_file+".tmp", "w")
        for ix,i in enumerate(open(input_file)):
            i = i.split()
            i[0] = str(ix)+"_"+i[0]+"_"+":".join(i[6:10])
            fo.write("\t".join(i)+"\n")
        fo.close()
        os.system("mv "+input_file+".tmp"+" "+input_file)
            
            
