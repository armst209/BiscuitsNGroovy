#!/bin/bash
cd /root/BiscuitsnGroovy
systemctl start docker
docker build . -t bng-frontend
docker run -dp 8081:3000 --name bng-frontend bng-frontend