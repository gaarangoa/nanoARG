import luigi
import os
import base64
import json

from luigi.contrib.ssh import RemoteContext, RemoteTarget, RemoteFileSystem
from luigi.mock import MockFile

class CreateEnv(luigi.Task):
    parameters = luigi.Parameter()
    parameters = json.loads(base64.b64decode(parameters))

    def output(self):
        return luigi.LocalTarget(parameters['remote_input_file'])

    def run(self):
        os.system( "mkdir -p "+self.parameters['remote_sample_dir'] )
        os.system( "ssh newriver1.arc.vt.edu python "+self.parameters['path']+"/retrieve_file.py "+json.dumps(base64.encode(raw_parameters)) )



class RetrieveResults(luigi.Task):
    parameters = luigi.Parameter();

    def requires(self):
        return CreateEnv(parameters = self.parameters)
    
    def output(self):
        return MockFile("output", mirror_on_stderr=True)

    def run(self):
        print("done")