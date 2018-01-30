
import sys
import os

parameters = sys.argv[1]

cmd = " ".join([
    "scp",
    parameters['localhost']+':'+parameters['local_input_file'],
    parameters['remote_input_file']
])



