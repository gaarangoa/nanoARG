import sys

def blast2bed(input, arglen, iden, evalue, cov, bitscore):
    ARGLen = {i.split()[0].split("|")[0].replace('>',""):int(i.split()[1]) for i in open(arglen)} # File with the genes sizes, for computing the coverage.
    fo = open(input+'.bed','w');
    fo2 = open(input+'.sel', 'w');
    # fo.write("#read\tqstart\tqend\treference\tbitscore\tstrand\tAlignment-length__Evalue__Identity__Coverage__Reference-gene-length\n")
    for i in open(input):
        i = i.split();
        rule = 0
        coverage = int(i[3])/float(ARGLen[i[1].split('|')[0]])
        if float(i[2]) < iden: continue # minimum identity 60
        if float(i[10]) > evalue: continue # minimum evalue 1e-10
        if coverage < cov: continue # minimum coverage 90% ARG
        if float(i[-1]) < bitscore: continue # minimum bitscore to consider
        # print int(i[3]), ARGLen['>'+i[1]], cov*ARGLen['>'+i[1]] 
        # Initial location and strand 
        strand = '-';
        start = i[7]
        end = i[6]

        if(int(i[7])>int(i[6])): 
            strand='+';
            start=i[6];
            end=i[7];
        
        # TODO: make sure that the last term of the list does not affect other process!
        extra = "_".join([i[3], i[-2], i[2], str(coverage), str(ARGLen[i[1].split('|')[0]])])
        
        # read qstart qend reference bitscore strand Alignment-length__Evalue__Identity__Coverage__Reference-gene-length
        wt = "\t".join([i[0], start, end, i[1], i[-1], strand, extra])+'\n'
        fo.write(wt)
        
        fo2.write("\t".join([i[0], start, end, i[1], i[-1], strand, str(ARGLen[i[1].split('|')[0]]) ,str(round(100*float(i[3])/ARGLen[i[1].split('|')[0]],2)), i[-2], i[2]])+'\n')

    fo.close()
    fo2.close();
    return input+'.bed'

def main():
    input=sys.argv[1]
    arglen=sys.argv[2]
    iden=int(sys.argv[3])
    evalue=float(sys.argv[4])
    cov = float(sys.argv[5])
    bitscore = float(sys.argv[6])
    blast2bed(input, arglen, iden, evalue, cov, bitscore)

if __name__=="__main__":
    main()


# 