import sys, os
import conf
from validation.blast2bed import blast2bed
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
        cmd = "source /groups/metastorm_cscee/deeparg/venv/bin/activate && "+" python /groups/metastorm_cscee/deeparg/deeparg-ss/deepARG.py  --predict --genes --type nucl --input "+query+".tmp --output "+output+"  "+ options
        print("running deepARG:", cmd)
        try:
            os.system(cmd)
        except Exception as inst:
            os.system('echo "'+str(inst)+" >> "+ output)
        return True

    def preprocess(self, input_file, arglen_file):
        fo = open(input_file+".tmp", "w")

        fi = blast2bed(input_file, arglen_file, 20, 1e-5, 0.0, 40)

        # sort by start and end usin betools the generated bed file
        cmd = 'sort -k1,1 -k2,2n '+fi+'|'+'bedtools cluster -s -d 0 >'+fi+'.pre.clusters'
        os.system(cmd)

        for ix,i in enumerate(open(fi+".pre.clusters")):
            i = i.split()
            j = i[-2].split("_")
            start = i[1]
            end = i[2]
            if i[5] == "_":
                start = i[2]
                end = i[1]
            item = [i[0]+"_cluster_"+i[-1], i[3], j[2], j[0], j[7], j[8], start, end, j[5], j[6], j[1], i[4]]
            fo.write("\t".join(item)+"\n")

        fo.close()
        # os.system("mv "+input_file+" "+input_file+".input")
        # os.system("mv "+input_file+".tmp"+" "+input_file)

    def postprocess(self, input_file):
        print(input_file)
        map_aln = {(i.split()[0], i.split()[1]):i.split() for i in open(input_file+'.tmp')}
        # convert map file to blast output file
        fo = open(input_file+".dl.tmp", "w")
        for i in open(input_file+".dl.ARG"):
            if "#" in i[0]: continue
            i = i.split()
            j = map_aln[ (i[3], i[5]) ]
            item = "\t".join( [ i[3].split("_cluster_")[0], i[5] ]+j[2:])+"\n"
            fo.write( item )
        # os.system("mv " + input_file+".dl.tmp " + input_file)


