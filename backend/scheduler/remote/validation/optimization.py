import numpy as np
from pyswarm import pso
import sys
import os
import conf

from sklearn.metrics import precision_score, recall_score, f1_score, confusion_matrix

_RESULT=[]
_trueSamples = 34700;
_negativeSamples = 37652;
_potentialSamples = 2000;

_ARGLEN = conf.tools+'Resfams-full.size'

ARGLen = {i.split()[0]:int(i.split()[1]) for i in open(_ARGLEN)} 

# OPTIMIZATION
def performance(fi, x):
    iden, evalue, cov, bitscore= x
    # iden = iden/100.0
    # print('processing file: ', fi)
    predicted=[];
    label=[];
    precision = 0;
    recall = 0;
    argC = 0
    potC = 0;
    negC = 0
    
    for i in open(fi):
        i = i.split()
        c_cov, c_evalue, c_iden = i[6].split('_')

        # print '<',i[4],'...',iden,'<',c_iden, '...', evalue,'>', c_evalue,'...',cov*ARGLen['>'+i[3]],'<',c_cov
        
        # Select the clusters that are under the conditions: 
        if not bitscore < float(i[4]): predicted.append('noARG'); label.append('ARG'); continue
        if not iden < float(c_iden): predicted.append('noARG'); label.append('ARG'); continue
        if not evalue > float(c_evalue): predicted.append('noARG'); label.append('ARG'); continue
        if not cov*ARGLen['>'+i[3]] < float(c_cov): predicted.append('noARG'); label.append('ARG'); continue
        
        # print 'here is the one'

        lab_i = "|".join(i[0].split('|')[4:]);
        pre_i = "|".join(i[3].split('|')[3:]);
        if "ARG" == i[0].split("_")[0]: 
            argC+=1;
            # if lab_i == pre_i: 
            predicted.append('ARG')
            label.append('ARG')
        
        if "noARG" == i[0].split("_")[0]:
            negC+=1
            predicted.append('ARG')
            label.append('noARG')

    # if argC <_trueSamples:
    #     predicted+=['noARG']*(_trueSamples-argC)
    #     label+=['ARG']*(_trueSamples-argC)
    
    if negC <_negativeSamples:
        predicted+=['noARG']*(_negativeSamples-negC)
        label+=['noARG']*(_negativeSamples-negC)
    
    # print predicted, label 

    CM = confusion_matrix(predicted, label, labels=['ARG', 'noARG'])

    TP,FP = CM[0]
    FN,TN = CM[1]


    precision = float(TP)/(TP+FP)
    recall  = float(TP)/(TP+FN)
    specificity = float(TN)/(TN+FP)

    try:
        f1 = 2*(precision*recall)/(precision+recall) 
        # f1 = precision
    except:
        f1=0
    # 

    MCC = (TP*TN - FP*FN)/(((TP+FP)*(TP+FN)*(TN+FP)*(TN+FN))**0.5)

    print [TP,FP, FN, TN]
    print precision, recall, f1, MCC
    return [precision, recall, f1, MCC]


# define objective function
def error(x, *args):
    # iden, evalue, cov = x
    fi, arglen = args
    # evalue = float('1e'+str(int(evalue)))
    # from blast2bed import blast2bed
    # fi = blast2bed(fi, arglen, int(iden), evalue, round(cov,1), int(bitscore));
    # cmd = 'sort -k1,1 -k2,2n '+fi+'|'+'bedtools cluster -s -d 0 >'+fi+'.clusters'
    # os.system(cmd)
    # from bestHit import bestLocalHit
    # bestLocalHit(fi+'.clusters')
    precision,recall,f1score = performance(fi, x) # input is the bestHit file
    # result = {'bitscore':bitscore, 'evalue':evalue, 'coverage':cov, 'identity':iden, 'precision':precision, 'recall':recall, 'f1score':round(f1score, 2)}
    # _RESULT.append(result)
    # if precision>0:
    print(x)
    # 1. Call the process: alignment where the input parameters are placed.
    # 2. From the results compute the precision and recall 
    # 3. Get the 1-F1score (minimize error)
    return round(1-f1score, 2)

lb = [0, 1e-20, 0.5, 0]
ub = [100, 0.05, 1, 500]

args = (sys.argv[1], _ARGLEN)

# xopt, fopt = pso(error, lb, ub, ieqcons=[], maxiter=10000, args=args)

# print xopt, fopt

# iden, evalue, cov, bitscore

print performance(sys.argv[1], [float(sys.argv[2]), float(sys.argv[3]), float(sys.argv[4]), float(sys.argv[5])])



idents = [i*10 for i in range(11)];
covs = [i/10. for i in range(10)];
evals = [1e-10, 1e-8, 1e-7, 1e-5, 1e-4, 1e-3, 1e-2, 1e-1]
bitscores = [10*i for i  in range(0,11)]

if sys.argv[6] != 'one':
    fo  = open('parameters', 'w');
    for l in bitscores:
        for j in evals:
            for k in covs:
                for i in idents:
                    x = performance(sys.argv[1], [i, j, k, l])
                    xp = x+[i,j,k,l];
                    print xp
                    fo.write("\t".join([str(m) for m in xp])+"\n")

    fo.close();