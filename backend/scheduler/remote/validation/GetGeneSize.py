
import sys
from Bio import SeqIO


fi=sys.argv[1] # fastafile from besthit

for record in SeqIO.parse(open(fi), "fasta"):
    id = record.id.split(':')[0]
    print ">"+id+"\t"+str(len(record.seq))
