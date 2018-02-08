import subprocess
import os
import sys
from Bio import SeqIO
import json

_coverage = 0.8
_identity = 30
_evalue = 1e-10

origin_color = {
    1: "black",
    2: "red",
    3: "blue",
    4: "green"
}

def origin(string):
    if "UNIREF90" in string: return 3
    if "CARD" in string: return 1
    if "ARDB" in string: return 1
    if "UNIPROT" in string: return 1
    if "ACLAME" in string: return 2
    if "MGEs" in string: return 2
    if "BACMET" in string: return 4
    
    return 4

def get_fasta_read_length(fi=""):
    lng = {}
    for record in SeqIO.parse(open(fi), "fasta"):
        lng[record.id] = len(record.seq)
    return lng
    

def read_map(parameters = []):
    os.system("cat "+parameters["storage_remote_dir"]+"/*.bestHit > "+parameters["storage_remote_dir"]+"/all.bestHit.txt")
    data = [i.split() for i in open( parameters["storage_remote_dir"]+"/all.bestHit.txt" )]
    read_length = get_fasta_read_length( parameters["remote_input_file"] )
    # filter data according to the parameters
    x = {}
    for i in data:
        par = [float(k) for k in i[6].split("_")]
        if par[1] > _evalue: continue
        if par[2] < _identity: continue
        if par[3] < _coverage: continue
        # 
        doc = i[3].split("|")
        # 
        item = {
            "block_id": i[0],
            "start": int(i[1]),
            "end": int(i[2]),
            "position": int(i[1]) + ((int(i[2])-int(i[1]))/2),
            "value": doc[0]+"<hr>"+doc[3]+"<br>"+doc[4],
            "strand": i[5],
            "evalue": par[1],
            "identity": par[2],
            "coverage": par[3],
            "color": origin_color[origin(i[3])],
            "origin": origin(i[3]),
            "stroke_width": 1,
            "metadata": doc
        }
        # 
        try:
            x[i[0]].append(item)
        except Exception as e:
            x[i[0]] = [item]

    data = []
    for i in x:
        _hasarg = len([ k for k in x[i] if k['origin']==1 ])
        _hasmge = len([ k for k in x[i] if k['origin']==2 ])
        _hasmrg = len([ k for k in x[i] if k['origin']==4 ])
        
        if _hasarg == 0 and _hasmge == 0 and _hasmrg == 0: continue
        read = {"len": read_length[i], "color": 'black', "label": i, "id": i, "args": len([ k for k in x[i] if k['origin']==1 ]), "genes": len(x[i])}
        item = {
            "read": [read],
            "data": x[i]
        }

        data.append(item)

    json.dump(data, open(parameters["storage_remote_dir"]+"/all.bestHit.json", "w"))