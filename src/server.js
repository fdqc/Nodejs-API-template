const http = require('http');
const app = require('./app');
const { apiPort } = require('./config');
const loaders = require('./loaders');

const startServer = () => {
  loaders(app);

  const server = http.createServer(app);
  return server.listen(apiPort, () => {
    console.info('Server is up');
  });
};

module.exports = { app: startServer() };
