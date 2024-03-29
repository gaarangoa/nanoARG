import sys
import time
import os
import conf
import json
import base64


parameters = json.loads(base64.b64decode(sys.argv[1]))

os.system('mkdir -p '+parameters['storage_remote_dir'])
qsub = parameters['qsub_file']

cmd = "\n".join([
    '#!/bin/bash',
    '#PBS -l nodes=1:ppn=6',
    '#PBS -l walltime=20:00:00',
    # '#PBS -q open_q',
    '#PBS -q normal_q',
    '#PBS -A computeomics',
    '#PBS -W group_list=cascades\n',
    # 'module load jdk/1.8.0 gcc/5.2.0 openmpi/1.8.5 hmmer atlas bowtie2 samtools bedtools\n',
    'module load jdk/1.8.0 gcc gsl/2.4  atlas bowtie2 samtools bedtools\n',
    'cd ' + parameters['storage_remote_dir'],
    'export PYTHONPATH=$PYTHONPATH:'+parameters['remote_path'],
    'export CENTRIFUGE_HOME=' + \
    parameters['remote_path']+'/bin/centrifuge-1.0.3-beta',
    'source /groups/metastorm_cscee/nanoARG/backend/scheduler/remote/env/nanoarg/bin/activate',
    "       /groups/metastorm_cscee/nanoARG/backend/scheduler/remote/env/nanoarg/bin/luigid --background --logdir=logs",
    'cd ' + parameters['remote_path'],
    'rm ' + parameters['storage_remote_dir'] + '/*.json',
    '       /groups/metastorm_cscee/nanoARG/backend/scheduler/remote/env/nanoarg/bin/luigi --module ' + \
    parameters['pipeline'] + " RetrieveResults " + \
    " --local-scheduler --parameters " + sys.argv[1],
    'exit;'
])

outq = open(qsub, 'w')
outq.write(cmd)
outq.close()

os.system('cd '+parameters['storage_remote_dir']+' && qsub '+qsub)
