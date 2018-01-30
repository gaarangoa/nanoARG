import luigi
import os
import base64
import json

from luigi.contrib.ssh import RemoteContext, RemoteTarget, RemoteFileSystem
from luigi.mock import MockFile

class CreateEnv(luigi.Task):
    parameters = luigi.Parameter()
    
    def output(self):
        par = json.loads(base64.b64decode(self.parameters))
        return luigi.LocalTarget(par['remote_input_file'])

    def run(self):
        par = json.loads(base64.b64decode(self.parameters))
        os.system( "mkdir -p "+par['remote_sample_dir'] )
        os.system( "ssh newriver1.arc.vt.edu python "+par['path']+"/retrieve_file.py "+self.parameters )



class RetrieveResults(luigi.Task):
    parameters = luigi.Parameter();

    def requires(self):
        return CreateEnv(parameters = self.parameters)
    
    def output(self):
        return MockFile("output", mirror_on_stderr=True)

    def run(self):
        print("done")