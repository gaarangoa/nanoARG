import RemoteImplementation

class RemoteInterface():
    def __init__(self):
        self.info = ''
    
    def run(self, parameters):
        remoteImplementation = RemoteImplementation.qsub();
        
        return remoteImplementation.run(parameters)

