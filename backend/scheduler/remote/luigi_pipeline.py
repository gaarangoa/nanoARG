import luigi
import os
import base64
import json

class CreateEnv(luigi.Task):
    stage = 'CREATING ENVIRONMENT IN CLUSTER'
    parameters = luigi.Parameter())
    parameters = json.loads(base64.b64decode(parameters)

    def output(self):
        return luigi.LocalTarget(parameters['remote_input_file'])

    def run(self):
        os.system("mkdir -p "+parameters['remote_sample_dir'])
        os.system("ssh newriver1.arc.vt.edu python "+parameters['path']+"/retrieve_file.py "+raw_parameters)

