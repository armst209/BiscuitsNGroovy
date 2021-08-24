#!/bin/bash
cd /root/BiscuitsNGroovy
./stop-server.sh
systemctl start docker
docker build . -t bng-frontend
docker run -dp 8081:3000 --name bng-frontend bng-frontend