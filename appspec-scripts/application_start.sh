#!/bin/bash
cd /root/BiscuitsNGroovy
systemctl start docker
./stop-server.sh
docker build . -t bng-frontend
docker run -dp 8081:3000 --name bng-frontend bng-frontend