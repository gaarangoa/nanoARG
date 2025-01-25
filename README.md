## NanoARG
Antibiotic Resistance data analysis of nanopore sequencing reads

        docker-compose build
        docker-compose up -d

See each readme file under the services for setup.

## Cluster
add the global variable in the cluster to the external module on the cluster.
add the line to the ~/.bashrc


## Front end

ng build --base-href /nanoarg/ --env=prod

<!-- export PYTHONPATH=$PYTHONPATH:/groups/metastorm_cscee/nanoARG/backend/scheduler/remote/ -->
<!-- Use 27857 as port for frontend -->

## Config files:
```bash
        API: .config.js
        scheduler: ./local/config.py
        remote: conf.py

```
```bash
        Frontend: setup docker-compose under command parameter, there setup the prod or dev environment as well as the url. This will run angular (ideally build the package). 

        set the prouction url: ./src/environments/environment.prod.ts: api_url set as the url defined in the server (bench2.cs.vt/nanoarg/api/)

        ng serve --env prod --base-href /nanoarg/ --host 0.0.0.0
```