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
        '#PBS -l nodes=1:ppn=6:pmem=20gb',
        '#PBS -l walltime=20:00:00',
        # '#PBS -q open_q',
        '#PBS -q normal_q',
        '#PBS -A computeomics',
        '#PBS -W group_list=newriver\n',
        'source /home/gustavo1/environments/nanopore/bin/activate',
        'module load gcc/5.2.0  openmpi/1.8.5 hmmer bedtools\n',
        'cd '+ parameters['storage_remote_dir'],
        'export PYTHONPATH=$PYTHONPATH:'+parameters['remote_path'],
        'export CENTRIFUGE_HOME='+parameters['remote_path']+'/bin/centrifuge-1.0.3-beta',
        "~/.local/bin/luigid --background --logdir=logs",
        'cd '+ parameters['remote_path'],
        '~/.local/bin/luigi --module '+ parameters['pipeline'] + " RetrieveResults " + " --local-scheduler --parameters " + sys.argv[1],
        'exit;'
        ]);

outq = open(qsub,'w');
outq.write(cmd);
outq.close();

os.system('cd '+parameters['storage_remote_dir']+' && qsub '+qsub)
