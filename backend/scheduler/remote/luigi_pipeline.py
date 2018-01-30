import luigi
import os
import base64
import json

from luigi.contrib.ssh import RemoteContext, RemoteTarget, RemoteFileSystem
from luigi.mock import MockFile

from tools import BestLocalHitClass as BestHit
from pipelines.mgeClass import MGEs

class CreateEnv(luigi.Task):
    parameters = luigi.Parameter()
    
    def output(self):
        par = json.loads(base64.b64decode(self.parameters))
        return luigi.LocalTarget(par['remote_input_file']+".log")

    def run(self):
        par = json.loads(base64.b64decode(self.parameters))
        os.system( "mkdir -p "+par['storage_remote_dir'] )
        os.system( "ssh newriver1.arc.vt.edu python "+par['remote_path']+"/retrieve_file.py "+self.parameters )
        os.system( ' echo "done" >> '+par['remote_input_file']+".log")


class MGEs(luigi.Taks):
    parameters = luigi.Parameter()
    target_file = ''
    def requires(self):
        return CreateEnv()

    def run(self):
        mges = MGEs()
        mges.run()
        self.target_file = mges.postprocess()

    def output(self):
        return luigi.LocalTarget(self.target_file)


class RetrieveResults(luigi.Task):
    parameters = luigi.Parameter();

    def requires(self):
        return CreateEnv(parameters = self.parameters)
    
    def output(self):
        return MockFile("output", mirror_on_stderr=True)

    def run(self):
        print("done")