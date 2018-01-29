from luigi import six

import luigi
from luigi.contrib.ssh import RemoteContext, RemoteTarget, RemoteFileSystem
from luigi.mock import MockFile

from config import SSH_HOST, REMOTE_TOOLS



class qsub():
    def __init__(self):
        self.info = ''
    def run(self, parameters):
        # Create connection to remote host
        remote = RemoteContext(SSH_HOST);
        # Create the command to run in the remote server
        cmd = " ".join(["python ",REMOTE_TOOLS+"qsub.py"]+parameters);
        # Run the process and get an ID
        jid = remote.check_output([cmd]);
        return jid 
