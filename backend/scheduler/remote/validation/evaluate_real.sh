path='/groups/metastorm_cscee/ARGpore/storage/';

# project='58d15dd366af97e81f2068b5';
# samples='58e0469b56417d9b3c7428ca 58e0471756417d9b3c7428cb 58e0483b56417d9b3c7428cc';

# # compute the abundance best hit based on the stated parameters
# for sample in $samples; 
# do
#     python /groups/metastorm_cscee/ARGpore/src/remote/pipeline.py $path/$project/$sample/demux.corrected.merged.aligned $path/$project/$sample/ $path/$project/$sample/barcodes.fasta annotation
# done


project='58efd3bc71308bb32b1b155f';
samples='58f01dd771308bb32b1b1564 58f01cbc71308bb32b1b1563 58efeb3e71308bb32b1b1561 58e0469b56417d9b3c7428ca 58e0471756417d9b3c7428cb 58e0483b56417d9b3c7428cc 58e048a356417d9b3c7428cd';

# compute the abundance best hit based on the stated parameters
for sample in $samples; 
do
    python /groups/metastorm_cscee/ARGpore/src/remote/pipeline.py $path/$project/$sample/demux.corrected.merged.aligned $path/$project/$sample/ $path/$project/$sample/barcodes.fasta annotation
done




# python /groups/metastorm_cscee/ARGpore/src/remote/validation/get_coverage_fraction.py *.bestHit > dist