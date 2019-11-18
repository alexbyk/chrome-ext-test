# Start

## Ports

These ports should be available

  - 8080 - backend

Clone a repo

    git@github.com:alexbyk/chrome-ext-test.git
    cd chrome-ext-test

## Backend
Start a backend

    cd node
    npm ci
    npm run start:prod

## Frontend
Build an extension

    cd ../front
    npm ci
    npm run build

Load an unpacked extension in development mode under the `build` folder

## Running via docker-compose

    docker-compose up

# Testing

Each folder supports `npm run test` command


# Description

## Backend

Search server serves one purpose: cache common requests and provide a pipe between `bing` server and our api client

Cache supports different clients via interfaces. In-memory cache implementation included

## Frontend

Written in react with `RxJS` for state and event management. (avoid duplicate queries, debounce etc)

Each service contains mocked implementation for tests


# If I had more time

If I had more time this wouldn't be a test project. Because to make it production-ready we should write db engine cache implementation, provide caching in frontend, split logic to background/ui extensions and so on. So this project is MVP for available time
