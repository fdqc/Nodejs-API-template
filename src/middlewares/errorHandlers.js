const errorHandler = (error, _req, res, _next) => {
  console.error('Unexpected error', error.stack);
  return res.status(500).json({ errors: [{ error: 'unexpected_error' }] });
};

module.exports = {
  errorHandler,
};
