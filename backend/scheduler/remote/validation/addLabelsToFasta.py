# This script takes the fasta file with the ids from the genomes and positions and add 
# the ARG annotation for that long 'read'. So, I don't need to use the annotation in different
# files, just to make life easier. 

import sys
from Bio import SeqIO
from Bio.Seq import Seq

def chunkstring(string, length):
    pieces = range(0, len(string), length)+range(length/2, len(string), length);
    return (string[0+i:length+i] for i in pieces)

fi=sys.argv[1] # fastafile from besthit
f2=sys.argv[2]
tag=sys.argv[3]

reads=[]

for record in SeqIO.parse(fi, "fasta"):
    seqn = str(record.seq);
    id = record.id
    chunks = chunkstring(seqn, 33);

    for l,k in enumerate(chunks):
        if len(k)>25:
            record.Seq = Seq(k);
            record.id = tag+"_"+id+'|'+str(l);
            record.name = '';
            record.description = '';
            reads.append(record);
            l+=1;
            
SeqIO.write(reads, open(fo, 'w'), 'fasta')