import sys

def bestLocalHit(fi):
    cluster = {}
    for i in open(fi):
        i = i.split()
        try:
            if cluster[i[-1]][4]>i[4]:
                cluster[i[-1]] = i
        except:
            cluster[i[-1]] = i
    # 
    fo = open(fi+'.bestHit', 'w')
    span = 0 # define this variable only when making new datasets
    for i in cluster:
        # add +/- nucleotides to the ARG locations
        if int(cluster[i][1])-span>0: cluster[i][1]=str(int(cluster[i][1])-span)
        cluster[i][2]=str(int(cluster[i][2])+0);
        # cluster[i][0]=cluster[i][0]+'|'+cluster[i][3].replace('FEATURES|','')
        fo.write('\t'.join(cluster[i])+'\n')


def main():
    bestLocalHit(sys.argv[1])

if __name__=="__main__":
    main()