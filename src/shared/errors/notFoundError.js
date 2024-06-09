class NotFoundError extends Error {
  constructor(message) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, NotFoundError);
    }
  }
}

module.exports = NotFoundError;
