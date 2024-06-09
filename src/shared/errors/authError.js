class AuthError extends Error {
  constructor(message) {
    super(message);

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, AuthError);
    }
  }
}

module.exports = AuthError;
