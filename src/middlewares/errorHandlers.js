const AuthError = require('../shared/errors/authError');
const ForbiddenError = require('../shared/errors/forbiddenError');
const NotFoundError = require('../shared/errors/notFoundError');

const errorHandler = (error, _req, res, _next) => {
  console.error('Unexpected error', error.stack);
  return res.status(500).json({ errors: [{ error: 'Unexpected error' }] });
};

const authErrorHandler = (error, _req, res, next) => {
  if (error instanceof AuthError) {
    return res.status(401).json({
      errors: [{ message: error.message }],
    });
  }

  return next(error);
};

const notFoundErrorHandler = (error, _req, res, next) => {
  if (error instanceof NotFoundError) {
    return res.status(404).json({
      errors: [{ message: error.message }],
    });
  }

  return next(error);
};

const forbiddenErrorHandler = (error, _req, res, next) => {
  if (error instanceof ForbiddenError) {
    return res.status(403).json({
      errors: [{ message: error.message }],
    });
  }

  return next(error);
};

module.exports = {
  errorHandler,
  authErrorHandler,
  notFoundErrorHandler,
  forbiddenErrorHandler,
};
