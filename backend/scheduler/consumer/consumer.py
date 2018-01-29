import pika
import json
import time
import sys
import os

__local_dir__ = "/src/";

class CONSUMER:
    def __init__(self, consumer_id):
        time.sleep(20)
        try:
            self.connection = pika.BlockingConnection(pika.ConnectionParameters(host='scheduler', credentials=pika.PlainCredentials("rabbitmq", "rabbitmq") ))
        except:
            time.sleep(60)
        self.channel = self.connection.channel()
        self.channel.queue_declare(queue='nanopore', durable=True)
        self.consumer_id = consumer_id

    def run(self):
        def callback(ch, method, properties, body):   
            print(" [x] Received %r" % body)
            item = json.loads(body)
            ch.basic_ack(delivery_tag = method.delivery_tag)
            cmd = 'cd '+__local_dir__+'./local/ && PYTHONPATH="." luigi --module luigi_pipeline RetrieveResults --sid '+item['sid'];
            os.system(cmd)
            time.sleep(100)

        self.channel.basic_qos(prefetch_count = 1)    
        self.channel.basic_consume(callback,
                            queue='nanopore')

        self.channel.start_consuming()

consumer = CONSUMER("consumer")
consumer.run()

# method_frame, header_frame, body = channel.basic_get(queue="hello")
# if method_frame:
#     print(method_frame, header_frame, body)
#     # channel.basic_ack(method_frame.delivery_tag)
# else:
#     print('No message returned')
