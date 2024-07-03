const cors = require('cors');
const helmet = require('helmet');
const configRoutes = require('../api/routes');
const { corsOptions } = require('../config');
const { errorHandler, authErrorHandler, notFoundErrorHandler } = require('../middlewares/errorHandlers');
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
  app.use(errorHandler);

  app.use(helmet());
  app.disable('x-powered-by');

  initAPIDocs(app);
};

module.exports = expressLoader;
