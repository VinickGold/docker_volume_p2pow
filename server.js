'use strict';

const express = require('express');
const fs = require('fs');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {

  // Lê o arquivo de configuração montado no volume para exibição do valor da mensagem
  let rawdata = fs.readFileSync('../p2p_volume/config.json');
  let file = JSON.parse(rawdata);
  res.send(file.message);


});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);