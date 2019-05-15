## Consumer - queue NanoARG

The scheduler will setup the work to be run in ARC. It requires a configuration file under ./local/config.py

the first time creating the container you have to:
    
    RUN docker exec -it container_id bash
    RUN ssh-keygen -t rsa -b 2048 -v -N "" -f /root/.ssh/id_rsa
    RUN ssh-copy-id -i /root/.ssh/id_rsa user@cascades2.arc.vt.edu


