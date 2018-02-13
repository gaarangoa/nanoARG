import sys
import json
import base64
import requests

parameters = json.loads(base64.b64decode(sys.argv[1]))

cmd = 'http://bench.cs.vt.edu/api/nanoarg/sample/status/'+parameters['_id']+'/'+parameters['projectID']+'/done'
r = requests.get(cmd)
print(r.json())


