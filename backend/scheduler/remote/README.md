This directory (remove) contains the scripts needed for running the nanopore pipeline in a cluster
with the qsub environment. This DOES NOT implement any mapreduce or spark rutines. 

monitor.sh: is the program that is called from the local service. This keeps the process alive whereas its running. 

pipeline.py contains the workflow of the analysis. 

qsub.py: is used to build the specific qsub file

utils: contains the classes needed in the pipeline