import sys
import json
import base64
import requests

parameters = json.loads(base64.b64decode(sys.argv[1]))
dev_server = 'https://laedo.serveo.net'
prod_server = 'http://bench.cs.vt.edu/api/nanoarg'
# cmd = prod_server+'/sample/status/'+parameters['_id']+'/'+parameters['projectID']+'/'+sys.argv[2]
cmd = dev_server+'/sample/status/'+parameters['_id']+'/'+parameters['projectID']+'/'+sys.argv[2]
r = requests.get(cmd)
print(r.json())


