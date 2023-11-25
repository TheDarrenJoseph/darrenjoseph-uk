#!/bin/bash

if [ -z "$1" ]; then
    echo "Arg 1 - PORT is required"
  exit 1;
fi

if [ -z "$2" ]; then
  echo "Arg 2 - USER is required"
  exit 1;
fi

if [ -z "$3" ]; then
    echo "Arg 3 - HOSTNAME is required"
  exit 1;
fi

PORT=$1
USER=$2
HOSTNAME=$3
rsync -avz -e "ssh -p $PORT" site/ "$USER@$HOSTNAME":/opt/darrenjoseph-uk
