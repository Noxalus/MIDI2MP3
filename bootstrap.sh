#!/usr/bin/env bash

# Install requirements
apt-get update
apt-get -y install timidity lame

# Install Node JS and NPM
curl -sL https://deb.nodesource.com/setup_8.x | sudo -E bash -
apt-get install -y nodejs