from Bio import SeqIO
import random
import sys
from Bio.SeqRecord import SeqRecord
from Bio.Seq import Seq

fi = sys.argv[1]
mutated=[]

nt = ['A', 'C', 'T', 'G']
ix=0
for record in SeqIO.parse(fi, "fasta"):
    if ix==10000: break 
    ix+=1;
    seqn = list(str(record.seq))

    if len(seqn)-6000 > 0:  
        pos = random.randint(0, len(seqn)-6000);
        seqn = seqn[pos:pos+5000];
    
    print ix

    mutr = int(0.15*len(seqn));
    mutp = random.sample(range(0, len(seqn)), mutr)
    for i in mutp:
        seqn[i] = nt[random.randint(0,3)]
    record.seq = Seq(''.join(seqn))
    # 
    mutated.append(record)

SeqIO.write(mutated, open(fi+'.mut', 'w'), 'fasta')