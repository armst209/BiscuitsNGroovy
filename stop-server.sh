#!/usr/bin/env bash
docker kill bng-frontend
yes | docker container prune
docker rmi bng-frontend
