FROM python:2

RUN pip install pika
RUN pip install luigi
RUN pip install requests

# the first time creating the container you have to:
# RUN docker exec -it nanopore_consumer_1 bash
# RUN ssh-keygen -t rsa -b 2048 -v -N "" -f /root/.ssh/id_rsa
# RUN ssh-copy-id -i /root/.ssh/id_rsa gustavo1@newriver1.arc.vt.edu

# CMD [ "" ]
# WORKDIR /src/