#!/bin/bash

rm -rf ./dist

mkdir ./dist
mkdir ./dist/subapp

# app子应用
cp -r ./app/dist/ ./dist/subapp/app/

# main基座
cp -r ./container/dist/ ./dist/container/

# cd ./dist
# zip -r mp$(date +%Y%m%d%H%M%S).zip *
# cd ..
echo 'bundle.sh execute success.'
