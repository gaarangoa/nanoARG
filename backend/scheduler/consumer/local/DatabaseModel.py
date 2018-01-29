import requests
import json
import config

class parameters():
    def __init__(self):
        self.info = 'Class for getting data from the DB management service';
        self.DB_HOST = config.database_link;
        self.data = ''; 

    def getParameters(self, sampleID, remote_storage):
        url = self.DB_HOST+'/sample/'+sampleID;
        r = requests.get(url).json()[0]

        data={  "id":r["_id"],
                "input":r['input'], 
                "barcode":r['barcode'],
                "remote_storage":remote_storage+"/"+r['projectID']+"/"+r["_id"]+"/",
                "remote_input":remote_storage+"/"+r['projectID']+"/"+r["_id"]+"/"+".".join(r['input'].split("/")[-1].split('_')[1:]),
                "remote_barcode":remote_storage+"/"+r['projectID']+"/"+r["_id"]+"/"+".".join(r['barcode'].split("/")[-1].split('_')[1:])}
        self.data = data
    
    def setParameters(self, data):
        self.data = data
    
class status():
    def __init__(self):
        self.info = 'Class for getting data from the DB management service'
        self.DB_HOST = config.database_link
        self.AnnotateAlignment = "Antibiotic Resistance Annotation"
        self.AlignReads = "Mapping reads to the AR database"
        self.BarcodeRemoval = "Removing Barcodes"
        self.SendBarcode = "Barcodes are stored in cluster"
        self.SendFasta = "Input file is stored in cluster"
        self.CreateEnv = "Creating environment in cluster for running analysis"

    def pushStatus(self, sampleID, status):
        url = self.DB_HOST+'/sample/update/status';
        r = requests.post(url, data = {"status":status, "_id":sampleID });
        return r

class Results():
    def __init__(self):
        self.info = 'store the results in the database';
        self.DB_HOST = config.database_link
        self.headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}
    def storage(self, sampleID, results, analysis):
        url = self.DB_HOST+'/sample/update/results';
        r = requests.post(url, data = {"analysis":analysis, "results":results, "_id":sampleID });
        return r