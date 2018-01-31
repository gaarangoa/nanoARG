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
            i[0] = str(ix)+"---"+i[0]+"---"+"---".join(i[3:10])
            fo.write("\t".join(i)+"\n")
        fo.close()
        os.system("mv "+input_file+".tmp"+" "+input_file)
    
    def postprocess(self, input_file):
        fo = open(input_file+".dl.tmp", "w")
        for i in open(input_file+".dl.ARG"):
            i = i.split()
            j = i[0].split("---")
            print i
            print j
            item = "\t".join([j[1], i[5], i[7], j[2], j[3], j[4], j[5], j[6], j[7], j[8] ])+"\n"
            fo.write( item )
        os.system("mv " + input_file+".dl.tmp " + input_file)
            
            
