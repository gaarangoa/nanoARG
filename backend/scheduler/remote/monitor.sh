#!/bin/sh

qsub_file=$1

FIRST=$(qsub $qsub_file)

while true;
do
  	var=`qstat $FIRST | awk '{getline;getline;print $5}'`;

        if [[ $var != Q && $var != R ]];
        then
            	break;
        fi
done