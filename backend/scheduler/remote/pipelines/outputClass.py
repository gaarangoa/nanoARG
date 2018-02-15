import subprocess
import os
import sys
from Bio import SeqIO
import json
import networkx as nx

import conf

from colour import Color
from tqdm import tqdm

_coverage = 0.8
_identity = 30
_evalue = 1e-10

origin_color = {
    1: "#107896",
    2: "#0C374D",
    3: "#93A661",
    4: "#F26D21"
}

def color_map():
    blue = Color('#009999')
    red = Color('#6600ff')
    green = Color('#003300')
    # 
    mges_data = {i.split()[0].split('|')[3]:'0' for i in open(conf.data+"/MGEs90.size")}
    mrgs_data = {i.split()[0].split('|')[3]:'0' for i in open(conf.data+"/bacmet.size")}
    args_data = {i.split()[0].split('|')[3]:'0' for i in open(conf.data+"/deeparg.size")}
    # 
    mges_colors = [str(i) for i in list(blue.range_to(Color("#669999"), len(mges_data)))]
    args_colors = [str(i) for i in list(red.range_to(Color("#ff9933"), len(args_data)))]
    mrgs_colors = [str(i) for i in list(green.range_to(Color("black"), len(mrgs_data)))]
    # 
    mges_c = { i:str(mges_colors[ix]) for ix,i in enumerate(mges_data) }
    mrgs_c = { i:str(mrgs_colors[ix]) for ix,i in enumerate(mrgs_data) }
    args_c = { i:str(args_colors[ix]) for ix,i in enumerate(args_data) }
    mges_c.update(mrgs_c)
    mges_c.update(args_c)
    return mges_c

color_gene = color_map()


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

def _get_id(gene):
    _id = gene['metadata'][3]
    if gene['origin'] == 1: 
        _id = gene['metadata'][4]
    return _id

def network(data = {}):
    N = {}
    E = {}
    arg_labels = {}
    for iread, read in enumerate(data):
        for ixgene, gene in enumerate(read['data']):
            # discard general functions
            if gene['origin'] == 3: 
                continue
            # for labels to type only consider args
            if gene['origin'] == 1: 
                arg_labels.update({
                    gene['metadata'][3]:{
                        "color": gene['color'],
                        "id": gene['metadata'][3],
                        "size": 1
                    }
                })
                
            # process nodes
            _id = _get_id(gene)
            try:
                N[_id]['size']+=1
            except:
                N[_id] = {
                    "id": _id,
                    "size": 1,
                    "origin": gene["origin"],
                    "color": gene['color'],
                    "metadata": gene['metadata']
                }
            if ixgene == len(read['data']): continue
            source = read['data'][ixgene]
            source_id = _get_id(source)
            for next_gene in range(ixgene+1, len(read['data'])):
                target = read['data'][next_gene]
                if target['origin'] == 3: continue
                target_id = _get_id(target)
                if target_id == source_id: continue
                try:
                    E[(source_id+"_"+target_id)]['weight']+=1
                except Exception as e:
                    E[(source_id+"_"+target_id)] = {
                        "source": source_id,
                        "target": target_id,
                        "id": source_id + "_" + target_id,
                        "weight": 1,
                        "color": source['color']
                    }

    nodes = [{"data":N[i]} for i in N]
    edges = [{"data":E[i]} for i in E]

    return [{ "nodes": nodes, "edges": edges }, arg_labels.values()]
            

def read_map(parameters = []):
    os.system("cat "+parameters["storage_remote_dir"]+"/*.bestHit > "+parameters["storage_remote_dir"]+"/all.bestHit.txt")
    data = [i.split() for i in open( parameters["storage_remote_dir"]+"/all.bestHit.txt" )]
    print('loading read lengths')
    read_length = get_fasta_read_length( parameters["remote_input_file"] )
    print('loading taxonomy file')
    # taxonomy files
    taxa = json.load(open(parameters["storage_remote_dir"]+"/taxa.json"))
    taxa_reads = taxa['reads']
    taxa_info = taxa['taxo']
    print('processing best hits and computing abundance')
    # filter data according to the parameters
    x = {}
    for i in tqdm(data):
        par = [float(k) for k in i[6].split("_")]
        if par[1] > _evalue: continue
        if par[2] < _identity: continue
        if par[3] < _coverage: continue
        # 
        doc = i[3].split("|")
        doc[3] = doc[3].replace("_", " ").replace(".", " ")
        doc[4] = doc[4].replace("_", " ").replace(".", " ")

        try:
            gcolor = color_gene[doc[3]]
        except:
            gcolor = '#93A661'
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
            "color": gcolor,
            "origin": origin(i[3]),
            "stroke_width": 1,
            "metadata": doc,
            "total_reads": len(read_length)
        }
        # 
        try:
            x[i[0]].append(item)
        except Exception as e:
            x[i[0]] = [item]

    data = []
    for i in tqdm(x):
        _hasarg = len([ k for k in x[i] if k['origin']==1 ])
        _hasmge = len([ k for k in x[i] if k['origin']==2 ])
        _hasmrg = len([ k for k in x[i] if k['origin']==4 ])

        if _hasarg == 0 and _hasmge == 0 and _hasmrg == 0: continue
        
        try:
            read_taxa = taxa_info[taxa_reads[i]['tax_id'] ]['name']
            read_taxa_id = taxa_info[taxa_reads[i]['tax_id']]['tax_id']
            read_taxa_rank = taxa_info[taxa_reads[i]['tax_id']]['tax_rank']
        except:
            read_taxa = "undefined"
            read_taxa_id = "undefined"
            read_taxa_rank = "undefined"

        read = {
            "len": read_length[i], 
            "color": 'black', 
            "label": i, 
            "id": i, 
            "genes": len(x[i]), 
            "args": len([ k for k in x[i] if k['origin']==1 ]), 
            "mges": len([ k for k in x[i] if k['origin']==2 ]),
            "mrgs": len([ k for k in x[i] if k['origin']==4 ]),
            "fngs": len([ k for k in x[i] if k['origin']==3 ]),
            "taxa": read_taxa,
            "taxa_id": read_taxa_id,
            "taxa_rank": read_taxa_rank
        }

        item = {
            "read": [read],
            "data": x[i]
        }

        data.append(item)
    
    print('building network')
    net, arg_labels = network(data)

    json.dump([ data, net, arg_labels, taxa_info.values(), {"total_reads": len(read_length)} ], open(parameters["storage_remote_dir"]+"/all.bestHit.json", "w"))