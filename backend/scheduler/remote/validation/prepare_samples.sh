# Get 2500 nt down/up-stream of the genes location. This is useful for making the test dataset. 
bedtools slop -b 150 -i ARGs.bed -g ../../Reference/bacteria.fa.fai > ARGs.2.5k.bed


# get fasta file
bedtools getfasta -fi ../../Reference/bacteria.fa -bed true_positives_updown.2.5k.bed -fo true_positives.fasta 

# add tag to fasta file
awk '{if($_~/>/){i+=1; gsub(">", "", $_); print ">noARG_"i}else{print}}' ARGs.2.5k.bed.fasta > true_positives.fa

mv true_positives.fa true_positives.fasta 



python /groups/metastorm_cscee/ARGpore/src/remote/validation/make_datasets.py ../*.bestHit 60 1e-5 1.0 40 down > noARGs.bed
python /groups/metastorm_cscee/ARGpore/src/remote/validation/make_datasets.py ../*.bestHit 30 1e-5 0 50 up > ARGs.bed



# parameters
# 1   2   3  4   5    6      7        8
# pre rec f1 mcc iden evalue coverage bitscore

awk '{if($7>=0.8 && $6==0.01){print $4"_"$5"_"$8}}' parameters | sort | uniq | awk '{gsub("_","\t", $0); print}' > mcc_bit_iden


X = read.table('mcc_bit_iden')
wireframe(V1 ~ V2 * V3, data=X, colorkey=TRUE, drape=TRUE, xlab='Identity', ylab='Bitscore', zlab='F1-Score', scales = list(arrows=F,cex=.5,tick.number = 10, z = list(arrows=F)), col.regions = rainbow(100, s = 1, v = 1, start = 0, end = max(1,100 - 1)/100, alpha = 1))