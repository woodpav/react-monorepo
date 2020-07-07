import express from 'express';
import path from 'path';

const server = express();

server.use(express.static(`${__dirname}/build`));

server.get('/*', (req, res) => {
  res.sendFile(path.join(`${__dirname}/build/index.html`));
});

server.listen(8080);

console.log('Running on Port 8080');
