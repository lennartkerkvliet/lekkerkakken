# Lekker Kakken

## Environment file

First retrieve the ip address of the bridge using https://discovery.meethue.com. Go to the ip address followed by /debug/clip.html and add the ip address to the env file.

Check if the API is working by GET `/api/newdeveloper`. This should show "unauthorized user". Now register a new device using POST `/api` with the body `{"devicetype":"app#device_name"}`. This will show "link button not pressed". Now click the link button and run the command again. Put the username in the env file.

For retrieving the lights use GET `/api/lights`.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```
