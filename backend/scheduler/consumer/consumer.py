import pika
import json
import time
import sys
import os
import local.config
__local_dir__ = "/src/";

import subprocess
import base64
class CONSUMER:
    def __init__(self, consumer_id):
        time.sleep(20)
        try:
            self.connection = pika.BlockingConnection(pika.ConnectionParameters(host='scheduler', credentials=pika.PlainCredentials("rabbitmq", "rabbitmq") ))
        except:
            time.sleep(30)
        self.channel = self.connection.channel()
        self.channel.queue_declare(queue='nanopore', durable=True)
        self.consumer_id = consumer_id

    def more_jobs(self):
        cmd = ["ssh "+local.config.ssh_host+' qstat -u '+local.config.cluster_user+' | wc -l ']
        # print("program input:", cmd)
        proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, shell=True)
        (out, err) = proc.communicate()
        if int(out.strip())-5 > local.config.max_cluster_jobs:
            return False
        else:
            return True


    def run(self):
        def callback(ch, method, properties, body):   
            body = base64.b64decode(body)
            body = json.loads(body)
            body.update({'remote_dir': local.config.remote_storage})
            body.update({'remote_path': local.config.remote_tools})
            body.update({'local_dir': local.config.local_storage})
            body.update({'localhost': local.config.local_host})
            body.update({'remotehost': local.config.ssh_host})
            body.update({'local_input_file': local.config.local_storage+"/"+str(body['timestamp'])+"_rawreads.fasta"})
            body.update({'remote_input_file': local.config.remote_storage+"/"+body['projectID']+"/"+body["_id"]+"/"+str(body["timestamp"])+"_rawreads.fasta"})
            body.update({'storage_remote_dir': local.config.remote_storage+"/"+body['projectID']+"/"+body["_id"]+"/"})
            body.update({'qsub_file': local.config.remote_storage+"/"+body['projectID']+"/"+body["_id"]+"/qsub.sh"})
            body.update({'pipeline': local.config.pipeline})
            

            item = base64.b64encode(json.dumps(body))
            
            # # # check whether there is space in the cluster to run more jobs
            while(not self.more_jobs()):
                time.sleep(30)
            cmd = "ssh gustavo1@newriver1.arc.vt.edu python "+local.config.remote_tools + "/qsub.py " +item
            os.system(cmd)

            ch.basic_ack(delivery_tag = method.delivery_tag)
        
        self.channel.basic_qos(prefetch_count = 1)    
        self.channel.basic_consume(callback,
                            queue='nanopore',
                            no_ack = False)

        self.channel.start_consuming()

consumer = CONSUMER("consumer")
consumer.run()

# while True:
#     try:
#         consumer = CONSUMER("consumer")
#         consumer.run()
#     except Exception as inst:
#         print(inst)

# method_frame, header_frame, body = channel.basic_get(queue="hello")
# if method_frame:
#     print(method_frame, header_frame, body)
#     # channel.basic_ack(method_frame.delivery_tag)
# else:
#     print('No message returned')
