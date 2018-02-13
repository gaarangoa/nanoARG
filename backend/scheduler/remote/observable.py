import sys
import json
import base64
import requests

parameters = json.loads(base64.b64decode(sys.argv[1]))

cmd = 'http://bench.cs.vt.edu/api/nanoarg/sample/status/'+parameters['projectID']+'/'+parameters['_id']+'/done'
r = requests.get(cmd)
print(r.json())


