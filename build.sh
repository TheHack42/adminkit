#!/bin/bash

docker run -it -v ${PWD}:/data node bash -c "cd /data && npm install && npm run build"

