from Bio import SeqIO
import random
import sys
from Bio.SeqRecord import SeqRecord
from Bio.Seq import Seq

fi = sys.argv[1]
mutated=[]

nt = ['A', 'C', 'T', 'G']

for record in SeqIO.parse(fi, "fasta"):
    seqn = list(str(record.seq))
    mutr = int(0.15*len(seqn));
    mutp = random.sample(range(0, len(seqn)), mutr)
    for i in mutp:
        seqn[i] = nt[random.randint(0,3)]
    record.seq = Seq(''.join(seqn))
    # 
    mutated.append(record)

SeqIO.write(mutated, open(fi+'.mut', 'w'), 'fasta')

