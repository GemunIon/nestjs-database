#!/usr/bin/env bash


echo -e "\033[34mTesting...\n\033[0m";

set -e # this will cause the shell to exit immediately if any command exits with a nonzero exit value.

export NODE_ENV=$NODE_ENV
export POSTGRES_URL=$POSTGRES_URL
export MONGO_URL=$MONGO_URL


lerna bootstrap --hoist

# lerna run lint --stream --parallel

lerna exec --stream -- npm run test -- --forceExit --runInBand --testTimeout=10000
