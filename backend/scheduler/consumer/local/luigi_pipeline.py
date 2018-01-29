# -*- coding: utf-8 -*-
#
# Copyright 2012-2015 Spotify AB
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
# http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.
#

from __future__ import print_function

from collections import defaultdict

from luigi import six

import luigi
from luigi.contrib.ssh import RemoteContext, RemoteTarget, RemoteFileSystem
from luigi.mock import MockFile

import os
import sys
import time
from RemoteInterface import RemoteInterface
import json
import DatabaseModel
from config import SSH_HOST
import config


# The host to which the computer is connected need to be recognized with the pem keys!!
# How to run this script:
# PYTHONPATH='.' luigi --module luigi_pipeline AnnotateAlignment --pid 1 --sid 4 --input /Volumes/data/dev/nanopore/pipeline/storage/rawreads.fasta --barcode /Volumes/data/dev/nanopore/pipeline/storage/barcodes.fasta


remote_storage_root =  config.remote_storage;

# Get the parameters stored in the database using the given sample id.

parameters = DatabaseModel.parameters();
report = DatabaseModel.status();
results = DatabaseModel.Results();
remoteInterface = RemoteInterface();

######################################################################################################################################
######################################################################################################################################

class CreateEnv(luigi.Task):
    stage = 'CREATING ENVIRONMENT IN CLUSTER'
    def output(self):
        parameters.setParameters(parameters.data)
        status = RemoteTarget(parameters.data['remote_storage'], SSH_HOST);
        # if status: stage.pushStatus(parameters.data['id'], stage.CreateEnv)
        return status

    def run(self):
        parameters.setParameters(parameters.data)
        remote = RemoteContext(SSH_HOST);
        remote.check_output(['mkdir -p '+parameters.data['remote_storage']]);

######################################################################################################################################
######################################################################################################################################

class SendFasta(luigi.Task):
    stage = 'SendFasta'
    def requires(self):
        parameters.setParameters(parameters.data)
        return CreateEnv()

    def output(self):
        status = RemoteTarget(
            parameters.data['remote_storage']+"rawreads.fasta",
            SSH_HOST
        )
        # if status: stage.pushStatus(parameters.data['id'], self.get_params['status'])
        return status

    def run(self):
        remote = RemoteFileSystem(SSH_HOST);
        remote.put(config.local_storage+'/'+parameters.data['input'], parameters.data['remote_storage']+'rawreads.fasta')
        # self.set_tracking_url("http://localhost:5510/sample/update/status")

######################################################################################################################################
######################################################################################################################################

class SendBarcode(luigi.Task):
    stage = 'SendBarcode'

    def requires(self):
        parameters.setParameters(parameters.data)
        return CreateEnv()

    def output(self):
        parameters.setParameters(parameters.data)
        status =  RemoteTarget(
            parameters.data['remote_storage']+"barcodes.fasta",
            SSH_HOST
        )
        return status

    def run(self):
        remote = RemoteFileSystem(SSH_HOST);
        remote.put(parameters.data['barcode'], parameters.data['remote_storage']+'barcodes.fasta')

######################################################################################################################################
######################################################################################################################################

class BarcodeRemoval(luigi.Task):
    stage = 'BarcodeRemoval';
    
    def requires(self):
        parameters.setParameters(parameters.data)
        return SendFasta(), SendBarcode()

    def output(self):
        status= RemoteTarget(
            parameters.data['remote_storage']+'demux',
            SSH_HOST
        )
        return status

    def run(self):
        jobid = remoteInterface.run([ parameters.data['remote_input'], 
                                    parameters.data['remote_storage'], 
                                    parameters.data['remote_barcode'],
                                    'demux'
                                ]);

######################################################################################################################################
######################################################################################################################################

class ErrorCorrection(luigi.Task):
    stage = 'ErrorCorrection';
    
    def requires(self):
        parameters.setParameters(parameters.data)
        return SendFasta()

    def output(self):
        status= RemoteTarget(
            parameters.data['remote_storage']+'demux.corrected',
            SSH_HOST
        )
        return status

    def run(self):
        jobid = remoteInterface.run([ parameters.data['remote_storage']+'demux', 
                                    parameters.data['remote_storage'], 
                                    parameters.data['remote_barcode'],
                                    'correct'
                                ]);

######################################################################################################################################
######################################################################################################################################

class MergeRawCorrectedReads(luigi.Task):
    stage = 'MergeRawCorrectedReads';
    
    def requires(self):
        parameters.setParameters(parameters.data)
        return ErrorCorrection()

    def output(self):
        status= RemoteTarget(
            parameters.data['remote_storage']+'demux.corrected.merged',
            SSH_HOST
        )
        return status

    def run(self):
        jobid = remoteInterface.run([ parameters.data['remote_storage']+'demux.corrected', 
                                    parameters.data['remote_storage'], 
                                    parameters.data['remote_barcode'],
                                    'merge'
                                ]);


######################################################################################################################################
######################################################################################################################################

class args(luigi.Task):
    stage = "ARGs"
    def requires(self):
        return MergeRawCorrectedReads()
    
    def output(self):
        parameters.setParameters(parameters.data)
        status =  RemoteTarget(
            parameters.data['remote_storage']+'demux.corrected.merged.aligned.annotated.resfams.json', 
            SSH_HOST
        )

        # if status: stage.pushStatus(parameters.data['id'], stage.AnnotateAlignment)

        return status

    def run(self):
        jobid = remoteInterface.run([ parameters.data['remote_storage']+'demux.corrected.merged.aligned', 
                                    parameters.data['remote_storage'], 
                                    parameters.data['remote_barcode'],
                                    'resfams'
                                ]);

class mges(luigi.Task):
    stage = "MGEs"
    def requires(self):
        return MergeRawCorrectedReads()
    
    def output(self):
        parameters.setParameters(parameters.data)
        status =  RemoteTarget(
            parameters.data['remote_storage']+'demux.corrected.merged.aligned.annotated.aclame.json', 
            SSH_HOST
        )

        # if status: stage.pushStatus(parameters.data['id'], stage.AnnotateAlignment)

        return status

    def run(self):
        jobid = remoteInterface.run([ parameters.data['remote_storage']+'demux.corrected.merged.aligned', 
                                    parameters.data['remote_storage'], 
                                    parameters.data['remote_barcode'],
                                    'aclame'
                                ]);

######################################################################################################################################
######################################################################################################################################

class RetrieveResults(luigi.Task):
    sid = luigi.Parameter();
    stage = "RetrieveResults"
    def requires(self):
        return args(), mges();
    
    def output(self):
        parameters.getParameters(self.sid, remote_storage_root)
        return MockFile("output", mirror_on_stderr=True)

    def run(self):
        data = self.input()[0].open('r').read()
        results.storage(self.sid, data, "ARG");
        # MGEs
        data = self.input()[1].open('r').read()
        results.storage(self.sid, data, "MGEs");

######################################################################################################################################
######################################################################################################################################

@luigi.Task.event_handler(luigi.Event.SUCCESS)
def celebrate_success(task):
    parameters.setParameters(parameters.data)
    report.pushStatus(parameters.data['id'], task.stage+": SUCCESS")


@luigi.Task.event_handler(luigi.Event.START)
def celebrate_start(task):
    parameters.setParameters(parameters.data)
    report.pushStatus(parameters.data['id'], task.stage+": RUNNING")


@luigi.Task.event_handler(luigi.Event.FAILURE)
def mourn_failure(task, exception):
    parameters.setParameters(parameters.data)
    report.pushStatus(parameters.data['id'], task.stage+": FAIL ")