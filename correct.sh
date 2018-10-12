#!/bin/bash

input_fasta=$1 #reads.fasta
genome=$2 #draft.fa
raw_nanopore=$3 #/data/NB06/
directory=/data/

export PATH=$PATH:/nanopolish/:/root/bwa/

cd ${directory}

# Index input files hdf5 using the fasta file
nanopolish index \
-d ${raw_nanopore} \
${input_fasta}

# Index the draft genome
bwa index ${genome}

# Align the basecalled reads to the draft sequence
bwa mem -x ont2d \
-t 8 \
draft.fa \
${input_fasta} |\
samtools sort - \
-o ${input_fasta}.sorted.bam \
-T ${input_fasta}.tmp

samtools index ${input_fasta}.sorted.bam

python /nanopolish/scripts/nanopolish_makerange.py ${genome} | \
parallel --results ${input_fasta}.nanopolish.results -P 8 \
nanopolish variants \
--consensus -o polished.{1}.vcf -w {1} \
-r ${input_fasta} \
-b ${input_fasta}.sorted.bam \
-g ${genome} \
-t 4 \
--min-candidate-frequency 0.1

nanopolish vcf2fasta -g ${genome} polished.*.vcf > ${input_fasta}.polished.fasta


