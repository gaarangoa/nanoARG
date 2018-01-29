import json

def absoluteAbundance(input, database):
    fox = '/'.join(input.split('/')[:-1])+"/demux.corrected.merged.aligned";
    type = {}
    subtype = {}
    for bh in open(input):
        bh = bh.strip().split('\t');
        key = bh[3].split('|')
        try:
            type[key[3]]+=1
        except:
            type[key[3]]=1
        try:
            subtype[key[4].upper()]+=1
        except:
            subtype[key[4].upper()]=1
    
    ltype = []
    for i in type:
        ltype.append({
            "name":i, 
            "value":type[i]
        })

    lsubtype=[]
    for j in subtype:
        lsubtype.append({
            "name":j,
            "value":subtype[j]
        })

    fo = open(fox+'.annotated.'+database+'.json','w');
    result = {"type":ltype, "subtype":lsubtype}
    json.dump(result, fo);
    fo.close();
    
    return True