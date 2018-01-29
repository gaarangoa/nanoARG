import sys
import time
import os
import conf

input = sys.argv[1];
output = sys.argv[2];
barcodes = sys.argv[3];

step = sys.argv[4];

input = input;
qsub = input+"."+step+".run.qsub";

cmd = "\n".join([
        '#!/bin/bash',
        '#PBS -l nodes=1:ppn=6',
        '#PBS -l walltime=20:00:00',
        # '#PBS -q open_q',
        '#PBS -q normal_q',
        '#PBS -A computeomics',
        '#PBS -W group_list=newriver\n',
        'module load gcc/5.2.0  openmpi/1.8.5 hmmer bedtools python/2.7.10\n',
        'python '+ conf.main_pipeline +'  '+input+' '+output+' '+barcodes+" "+step,
        'exit;'
        ]);

outq = open(qsub,'w');
outq.write(cmd);
outq.close();

os.system('cd '+"/".join(input.split("/")[:-1])+' && qsub '+qsub)