'use strict';

const express = require('express');
const http = require('http');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  http.request(nameHeroOptions, nameHeroResponse => {
    var nameHeroResponseData = '';

    nameHeroResponse.on('data', function (chunk) {
      nameHeroResponseData += chunk;
    });

    nameHeroResponse.on('end', function () {
      res.send(`Hello Kubernetes from pod ${process.env.HOSTNAME}! My name is ${nameHeroResponseData}.`);
    });
  }).end();
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);

// Name Hero Options
const nameHeroOptions = {
  hostname: process.env.NAMEHERO_SERVICE_SERVICE_HOST,
  port: process.env.NAMEHERO_SERVICE_SERVICE_PORT,
  path: '/',
  method: 'GET'
}
