require('dotenv').config();
const corsOptions = require('./cors');

const environment = process.env.NODE_ENV || 'development';

const config = {
  environment,
  apiPort: parseInt(process.env.PORT || '3000', 10),
  corsOptions: environment === 'production'
    ? corsOptions : {},
  basePath: '/api',
  saltRounds: parseInt(process.env.SALT_ROUNDS || '10', 10),
  jwtSecret: process.env.JWT_SECRET,
  tokenExpiresInMinutes: process.env.TOKEN_EXPIRES_IN_MINUTES,
};

module.exports = config;
