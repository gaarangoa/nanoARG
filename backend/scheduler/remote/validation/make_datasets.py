import sys

ARGLen = {i.split()[0]:int(i.split()[1]) for i in open('/groups/metastorm_cscee/deepARG/deeparg-ss/database/features.size')} 

# OPTIMIZATION
def main(fi, bound, x):
    iden, evalue, cov, bitscore = x
    for i in open(fi):
        i = i.split()
        c_cov, c_evalue, c_iden = i[6].split('_')

        # print iden,'<',c_iden, '...', evalue,'>', c_evalue,'...',cov*ARGLen['>'+i[3]],'<',c_cov

        # Select the clusters that are under the conditions: 
        # if not bitscore < float(i[4]): continue
        if bound == 'up':
            if not iden < float(c_iden): continue
            if not evalue > float(c_evalue): continue
            if not cov*ARGLen['>'+i[3]] < float(c_cov): continue
            if not bitscore < float(i[4]): continue
        
        if bound =='down':
            if not iden > float(c_iden): continue
            if not evalue < float(c_evalue): continue
            if not cov*ARGLen['>'+i[3]] > float(c_cov): continue
            if not bitscore > float(i[4]): continue
            
        print "\t".join(i)


if __name__=="__main__":
    # input, identity, evalue, coverage, bound, bitscore
    main(sys.argv[1], sys.argv[6], [float(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4]), float(sys.argv[5])])