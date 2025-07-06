const cors = require('cors');
const helmet = require('helmet');
const configRoutes = require('../api/routes');
const { corsOptions } = require('../config');
const {
  errorHandler,
  authErrorHandler,
  notFoundErrorHandler,
  forbiddenErrorHandler,
} = require('../middlewares/errorHandlers');
const { initPassport } = require('./passport');
const initAPIDocs = require('./swagger');

const expressLoader = (app) => {
  const passport = initPassport();
  app.use(passport.initialize());

  app.use(cors(corsOptions));
  app.options('*', cors());

  configRoutes(app);

  app.use(authErrorHandler);
  app.use(notFoundErrorHandler);
  app.use(forbiddenErrorHandler);
  app.use(errorHandler);

  app.use(helmet());
  app.disable('x-powered-by');

  initAPIDocs(app);
};

module.exports = expressLoader;
