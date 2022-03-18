const cors = require('cors');
const helmet = require('helmet');
const configRoutes = require('../api/routes');
const { corsOptions } = require('../config');
const { errorHandler } = require('../middlewares/errorHandlers');

const expressLoader = (app) => {
  app.use(cors(corsOptions));
  app.options('*', cors());

  configRoutes(app);

  app.use(errorHandler);

  app.use(helmet());
  app.disable('x-powered-by');

  /** @todo: swagger */
};

module.exports = expressLoader;
