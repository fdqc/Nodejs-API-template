const { basePath } = require('../config/index');
const userRoutes = require('./user/routes');
const authRoutes = require('./auth/routes');

const appRoutes = [
  userRoutes,
  authRoutes,
];

const configRoutes = (app) => {
  appRoutes.forEach((route) => {
    app.use(basePath, route);
  });
};

module.exports = configRoutes;
