import luigi
import os
import base64
import json

from luigi.contrib.ssh import RemoteContext, RemoteTarget, RemoteFileSystem
from luigi.mock import MockFile

from pipelines.mgeClass import MGEs

# class CreateEnv(luigi.Task):
#     parameters = luigi.Parameter()
    
#     def output(self):
#         par = json.loads(base64.b64decode(self.parameters))
#         return luigi.LocalTarget( par['remote_input_file'] )

#     def run(self):
#         par = json.loads(base64.b64decode(self.parameters))
#         os.system( "mkdir -p "+par['storage_remote_dir'] )
#         os.system( "ssh newriver1.arc.vt.edu python "+par['remote_path']+"/retrieve_file.py "+self.parameters )



class MobileGenetiElements(luigi.Task):
    parameters = luigi.Parameter()

    def run(self):
        par = json.loads(base64.b64decode(self.parameters))
        mges = MGEs(par['remote_input_file'])
        mges.align()
        mges.postprocess()

    def output(self):
        par = json.loads(base64.b64decode(self.parameters))
        mges = MGEs(par['remote_input_file'])
        return luigi.LocalTarget(mges.observable_file)


class RetrieveResults(luigi.Task):
    parameters = luigi.Parameter();

    def requires(self):
        return MobileGenetiElements(parameters = self.parameters)
    
    def output(self):
        return MockFile("done.txt")

    def run(self):
        # MGEs
        os.system( "ssh newriver1.arc.vt.edu python "+par['remote_path']+"/observable.py "+self.parameters )
