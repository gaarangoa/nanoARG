import luigi
import os
import base64
import json

class CreateEnv(luigi.Task):
    stage = 'CREATING ENVIRONMENT IN CLUSTER'
    parameters = luigi.Parameter()

    def output(self):
        parameters = json.loads(base64.b64decode(self.parameters))
        print(parameters)
        return luigi.LocalTarget(parameters['remote_input_file'])

    def run(self):
        os.system("mkdir -p "+self.output().parameters['remote_sample_dir'])
        os.system("ssh newriver1.arc.vt.edu python "+self.output().parameters['path']+"/retrieve_file.py "+raw_parameters)



class RetrieveResults(luigi.Task):
    parameters = luigi.Parameter();

    def requires(self):
        return CreateEnv(parameters = parameters)
    
    def output(self):
        return MockFile("output", mirror_on_stderr=True)

    def run(self):
        print("done")