import pika
import sys
import base64
import time
import json
import os

RD = "/Volumes/data/dev/nanopore/pipeline/Receiver_Pipeline/local/";

class RabbitMQ():
    def __init__(self, queue):
        self.connection = pika.BlockingConnection(pika.ConnectionParameters(host='localhost'));
        self.channel = self.connection.channel();
        self.channel.queue_declare(queue=queue, durable=True);
        self.queue = queue;

    def callback(self, ch, method, properties, body):
        # print(json.loads(body));
        try:
            sid = json.loads(body)['sid'];
            os.system('cd '+RD+' && PYTHONPATH="." luigi --module luigi_pipeline RetrieveResults --sid '+sid) #+' >/dev/null 2>&1 ')
        except:
            pass
        # print(sid)

        ch.basic_ack(delivery_tag = method.delivery_tag);

    def run(self):
        self.channel.basic_consume(self.callback, queue=self.queue)
        self.channel.basic_qos(prefetch_count=1)
        self.channel.start_consuming()

