import QueueModel 
import time

while 1:
	time.sleep(10);
	try:
		Q = QueueModel.RabbitMQ("nanopore");
		Q.run()
	except Exception as inst:
		# Q.run();
		print 'error:' + str(inst)
		# time.sleep(30);
		pass
	#time.sleep(30)
		#Q = QueueModel.RabbitMQ("nanopore");
		#Q.run()
