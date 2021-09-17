#!/usr/bin/env bash
docker build . -t bng-frontend
docker run -dp 8081:3000 --name bng-frontend bng-frontend
