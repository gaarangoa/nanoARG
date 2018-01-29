The local service consists of the classes and procedures to unqueue from rabbitMQ, launch the luigi
pipeline and update the database from the luigi pipeline. 

Database.py: contains the classes for connecting to the database service using python

luigi_pipeline: contains the classes with the pipeline for running the jobs in the cluster
!IMPORTANT: luigi pipeline uses ssh to connect to the server and runs qsub jobs. It's 
            mandatory to get the two machines communication via ssh keys. 

QueueModel: Classes for calling the queue program (RabbitMQ)

Receiver: Main program for getting the data from the queue and starting luigi

QsubModel: Classes for pipeline streaming using qsub in the cluster.


Start the receiver by typing: python Receiver.py