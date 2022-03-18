require('dotenv').config();
const corsOptions = require('./cors');

const environment = process.env.NODE_ENV || 'development';

const config = {
  environment,
  apiPort: parseInt(process.env.PORT || '3000', 10),
  corsOptions: environment === 'production'
    ? corsOptions : {},
  basePath: '/api',
};

module.exports = config;
