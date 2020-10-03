'use strict';

const express = require('express');
const database = require('./db.js');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  // Send a random name from database
  database.connection.query('SELECT * FROM names;', function (err, result) {
    if (err) throw err;

    var names = [];
    for (let i = 0; i < result.length; i++) {
      const element = result[i];
      names.push(element.name);
    }

    res.send(names[Math.floor(Math.random() * names.length)]);
  });
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
