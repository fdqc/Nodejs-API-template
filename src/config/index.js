require('dotenv').config();

const corsOptions = require('./cors');

const environment = process.env.NODE_ENV || 'dev';

const config = {
  environment,
  apiPort: parseInt(process.env.PORT || '3000', 10),
  corsOptions: environment === 'prod'
    ? corsOptions : {},
};

module.exports = config;
