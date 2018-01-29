# Get true dataset and negative dataset. 
# The true positive dataset is defined as the ARG like bacterial positions where we can be sure that its a real ARG
# The parameters for definng this set are: 
#   * 90% coverage over the full lenght of the gene
#   * 60% identity (minimum)
#   * 1e-10 evalue (minimum evalue)

# Load the lengths of each ARG

ARGLen = {i.split()[0]:int(i.split()[1]) for i in open('features.size')}

genomes = {}
for i in open('bacteria.ARGs.daa.tsv'):
    i = i.split();
    if float(i[2]) < 60: continue # minimum identity 60
    if float(i[10]) > 1e-10: continue # minimum id 1e-10
    if int(i[3]) < 0.9*ARGLen['>'+i[1]]: continue # minimum coverage 90% ARG
    try:
        genomes[i[0]].append(i)
    except:
        genomes[i[0]]=[i]


