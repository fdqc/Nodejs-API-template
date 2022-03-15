const whitelist = JSON.parse(process.env.CORS || '[]');

const validateOrigin = (origin, callback) => {
  if (whitelist.indexOf(origin) !== -1) {
    callback(null, true);
  } else {
    /** @todo: add an error handler for cors */
    callback(new Error('not_allowed_by_CORS'));
  }
};

module.exports = { origin: validateOrigin };
