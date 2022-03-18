const { basePath } = require('../config/index');
const userRoutes = require('./user/routes');

const configRoutes = (app) => {
  app.use(basePath, userRoutes);
};

module.exports = configRoutes;
