import luigi
import os
import base64
import json

from luigi.contrib.ssh import RemoteContext, RemoteTarget, RemoteFileSystem
from luigi.mock import MockFile

from pipelines.mgeClass import MGEs
from pipelines.argClass import ARGs
from pipelines.TaxonomyClass import Taxonomy


class MobileGenetiElements(luigi.Task):
    parameters = luigi.Parameter()

    def run(self):
        par = json.loads(base64.b64decode(self.parameters))
        mges = MGEs(par['remote_input_file'], "MGEs90")
        mges.align()
        mges.postprocess()
        os.system( "ssh newriver1.arc.vt.edu python "+par['remote_path']+"/observable.py "+self.parameters + " running MGEs" )

    def output(self):
        par = json.loads(base64.b64decode(self.parameters))
        mges = MGEs(par['remote_input_file'], "MGEs90")
        return luigi.LocalTarget(mges.observable_file)

class MapUniref(luigi.Task):
    parameters = luigi.Parameter()

    def run(self):
        par = json.loads(base64.b64decode(self.parameters))
        ref = MGEs(par['remote_input_file'], "uniref")
        ref.align()
        ref.postprocess()
        os.system( "ssh newriver1.arc.vt.edu python "+par['remote_path']+"/observable.py "+self.parameters + " running UniRef" )

    def output(self):
        par = json.loads(base64.b64decode(self.parameters))
        ref = MGEs(par['remote_input_file'], "uniref")
        return luigi.LocalTarget(ref.observable_file)

class MapBacMet(luigi.Task):
    parameters = luigi.Parameter()

    def run(self):
        par = json.loads(base64.b64decode(self.parameters))
        ref = MGEs(par['remote_input_file'], "bacmet")
        ref.align()
        ref.postprocess()
        os.system( "ssh newriver1.arc.vt.edu python "+par['remote_path']+"/observable.py "+self.parameters + " running MRGs" )

    def output(self):
        par = json.loads(base64.b64decode(self.parameters))
        ref = MGEs(par['remote_input_file'], "bacmet")
        return luigi.LocalTarget(ref.observable_file)

class ARGsDeepARG(luigi.Task):
    parameters = luigi.Parameter()

    def run(self):
        par = json.loads(base64.b64decode(self.parameters))
        mges = ARGs(par['remote_input_file'])
        mges.align()
        mges.postprocess()
        os.system( "ssh newriver1.arc.vt.edu python "+par['remote_path']+"/observable.py "+self.parameters + " running DeepARG" )

    def output(self):
        par = json.loads(base64.b64decode(self.parameters))
        mges = ARGs(par['remote_input_file'])
        return luigi.LocalTarget(mges.observable_file)

class TaxonomyTask(luigi.Task):
    parameters = luigi.Parameter()

    def run(self):
        par = json.loads(base64.b64decode(self.parameters))
        taxa = Taxonomy(par['remote_input_file'], 'centrifuge')
        taxa.align()
        taxa.postprocess()
        os.system( "ssh newriver1.arc.vt.edu python "+par['remote_path']+"/observable.py "+self.parameters + " running centrifuge" )

    def output(self):
        par = json.loads(base64.b64decode(self.parameters))
        taxa = Taxonomy(par['remote_input_file'], 'centrifuge')
        return luigi.LocalTarget(taxa.observable_file)

from pipelines.outputClass import read_map
class RetrieveResults(luigi.Task):
    parameters = luigi.Parameter();

    def requires(self):
        return [
            MobileGenetiElements(parameters = self.parameters), 
            ARGsDeepARG(parameters = self.parameters), 
            MapUniref(parameters = self.parameters),
            MapBacMet(parameters = self.parameters),
            TaxonomyTask(parameters = self.parameters)
        ]
    
    def output(self):
        return MockFile("done.txt")

    def run(self):
        # create output files
        par = json.loads(base64.b64decode(self.parameters))
        read_map(parameters = par)
        os.system( "ssh newriver1.arc.vt.edu python "+par['remote_path']+"/observable.py "+self.parameters + " done" )
