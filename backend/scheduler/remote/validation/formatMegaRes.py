import sys
from Bio import SeqIO
import conf

metadata = {i.split(',')[0]:"|".join([i.split(',')[1], i.split(',')[3]]).strip() for i in open(conf.data+'megares_annotations_v1.01.csv')}

i=0
data = []
for record in SeqIO.parse(conf.data+"megares.noSNPs.fasta", "fasta"):
    id = str(i)+'|'+'FEATURES|MEGARES|'+"_".join(metadata[record.id].split())
    record.id = id
    record.name = ''
    record.description = ''
    data.append(record)
    i+=1

SeqIO.write(data, open(conf.data+'megares.noSNPs.format.fasta', 'w'), 'fasta')