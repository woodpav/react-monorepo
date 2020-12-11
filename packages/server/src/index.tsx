import App from '@app/components';
import express from 'express';
import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

const server = express();

server.get('/*', (req, res) => {
  const html = ReactDOMServer.renderToString(<App greeting="from server" />);
  const index = path.resolve(`${__dirname}/../dist/client/index.html`);

  fs.readFile(index, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Internal server error.');
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    );
  });
});

server.listen(8080);

console.log('Running on Port 8080');
