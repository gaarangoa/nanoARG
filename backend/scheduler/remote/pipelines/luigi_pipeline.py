import luigi
import os
import base64
import json

class CreateEnv(luigi.Task):
    stage = 'CREATING ENVIRONMENT IN CLUSTER'
    parameters = json.loads(base64.b64decode(luigi.Parameter()))

    def output(self):
        return luigi.LocalTarget(parameters['remote_input_file'])

    def run(self):
        os.system("mkdir -p "+parameters['remote_sample_dir'])
        os.system("ssh newriver1.arc.vt.edu python "+parameters['path']+"/retrieve_file.py "+raw_parameters)

