import sys
import json
import base64

parameters = json(base64.b64decode(sys.argv[1]))

