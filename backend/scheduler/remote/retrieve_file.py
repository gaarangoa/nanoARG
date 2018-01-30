
import sys
import os
import json
import base64

parameters = json.loads(base64.decode(sys.argv[1]))

cmd = " ".join([
    "scp",
    parameters['localhost']+':'+parameters['local_input_file'],
    parameters['remote_input_file']
])



