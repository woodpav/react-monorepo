import express from 'express';
import path from 'path';
import App from '@app/components/dist';

const server = express();

server.use(express.static(`${__dirname}/build`));

server.get('/*', (req, res) => {
  console.log('App', App)
  res.sendFile(path.join(`${__dirname}/build/index.html`));
});

server.listen(8080);

console.log('Running on Port 8080');
