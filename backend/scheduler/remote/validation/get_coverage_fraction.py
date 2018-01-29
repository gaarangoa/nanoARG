
arglen = '/groups/metastorm_cscee/ARGpore/tools/Resfams-full.size'
ARGLen = {i.split()[0]:int(i.split()[1]) for i in open(arglen)} 
import sys
for i in open(sys.argv[1]):
    i = i.split();
    p = i[6].split('_')
    p[0]=str(float(p[0])/ARGLen['>'+i[3]])
    print "\t".join(i[:6]+p+[i[-1]])