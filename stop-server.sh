#!/usr/bin/env bash
docker kill bng-frontend
docker container prune
docker rmi bng-frontend
