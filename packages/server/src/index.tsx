import express from 'express';
import path from 'path';
import fs from 'fs';
import App from '@app/components/dist';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const server = express();

server.use(express.static(`${__dirname}/build`));

server.get('/*', (req, res) => {
  let html = ReactDOMServer.renderToString(<App />);

  fs.readFile(path.join(`${__dirname}/build/index.html`), 'utf8', function (err, data) {
    if (err) throw err;
    const document = data.replace(/<div id="app"><\/div>/, `<div id="app">${html}</div>`);
    res.send(document);
  });
});

server.listen(8080);

console.log('Running on Port 8080');
