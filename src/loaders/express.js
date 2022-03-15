const cors = require('cors');
const configRoutes = require('../api/routes');
const { corsOptions } = require('../config');
const { errorHandler } = require('../middlewares/errorHandlers');

const expressLoader = (app) => {
  app.use(cors(corsOptions));
  app.options('*', cors());

  configRoutes(app);

  app.use(errorHandler);

  /** @todo: swagger */
};

module.exports = expressLoader;
