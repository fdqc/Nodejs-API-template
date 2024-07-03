const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const { swaggerJsDocOptions, environment } = require('../config');

const initAPIDocs = (app) => {
  if (environment !== 'production') {
    const swaggerSpec = swaggerJsdoc(swaggerJsDocOptions);
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, { explorer: true }));
  }
};

module.exports = initAPIDocs;
