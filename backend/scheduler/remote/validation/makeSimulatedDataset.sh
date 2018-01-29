# True
~/.local/bin/vsearch --fastx_subsample /groups/metastorm_cscee/ARGpore/data/bacterial_genomes/Dataset/TrueDataset/bacteria.ARGs.daa.tsv.bed.clusters.bestHit.fasta.mut.ann.fa --sample_size 2000 --fastaout /groups/metastorm_cscee/ARGpore/data/bacterial_genomes/Dataset/SimulatedDataset/true.fa


# potential
~/.local/bin/vsearch --fastx_subsample /groups/metastorm_cscee/ARGpore/data/bacterial_genomes/Dataset/PotentialDataset/bacteria.ARGs.daa.tsv.bed.clusters.bestHit.fasta.mut.ann.fa --sample_size 2000 --fastaout /groups/metastorm_cscee/ARGpore/data/bacterial_genomes/Dataset/SimulatedDataset/potential.fa


# Negative
~/.local/bin/vsearch --fastx_subsample /groups/metastorm_cscee/ARGpore/data/bacterial_genomes/Dataset/NegativeDataset/bacteria.ARGs.daa.tsv.bed.clusters.bestHit.fasta.mut.ann.fa --sample_size 6000 --fastaout /groups/metastorm_cscee/ARGpore/data/bacterial_genomes/Dataset/SimulatedDataset/negative.fa


cat true.fa potential.fa negative.fa > dataset.fasta



 ~/.local/bin/vsearch --fastx_subsample true_positives.fa --sample_size 2000 --fastaout td

 cat td Background.mut.fasta > dt.fasta

 