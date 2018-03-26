# This script takes an input of clustered sequences from bedtools and select the best hit of each clustered
# What I've observed is that actually there are not mixed ARGs and the locations are very consistent.

# sort -k1,1 -k2,2n bacteria.ARGs.daa.tsv.P.bed | bedtools cluster -s -d 0 -i > bacteria.ARGs.daa.tsv.bed.clusters


import sys, os

# fi = sys.argv[1]
# arglen = sys.argv[2]
# iden = float(sys.argv[3])
# evalue = float(sys.argv[4])
# cov = float(sys.argv[5])
# bitscore = float(sys.argv[6])

def quant(fi, arglen, iden, evalue, cov, bitscore, database):
    # convert output from blast to bed file
    from blast2bed import blast2bed
    fi = blast2bed(fi, arglen, iden, evalue, cov, bitscore);

    # sort by start and end usin betools the generated bed file
    cmd = 'sort -k1,1 -k2,2n '+fi+'|'+'bedtools cluster -s -d 10 >'+fi+'.clusters'
    os.system(cmd)

    # get best hit of each cluster:
    from bestHit import bestLocalHit
    bestLocalHit(fi+'.clusters')

    # Compute abundances
    from Abundance import absoluteAbundance
    absoluteAbundance(fi+'.clusters.bestHit', database)


# cmd = 'bedtools getfasta -s -fi /groups/metastorm_cscee/ARGpore/data/bacterial_genomes/Reference/bacteria.fa -bed '+fi+'.bestHit ' + '-fo '+ fi+'bestHit.fasta'

# os.system(cmd)

#
# bedtools getfasta -s -fi ../../Reference/bacteria.fa -bed bacteria.ARGs.daa.tsv.bed.clusters.bestHit -fo bacteria.ARGs.daa.tsv.bed.clusters.bestHit.fasta