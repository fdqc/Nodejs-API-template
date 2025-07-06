const passport = require('passport');
const jwt = require('jwt-simple');
const { DateTime } = require('luxon');
const passportJWT = require('passport-jwt');

const { jwtSecret } = require('../config');
const NotFoundError = require('../shared/errors/notFoundError');
const AuthError = require('../shared/errors/authError');
const userRepository = require('../shared/repositories/user');

const { Strategy } = passportJWT;

const customExtractor = (req) => {
  const authHeader = req.get('Authorization') ?? '';
  const token = authHeader.split(' ')[1];

  if (!token) throw new AuthError('unauthorized');

  const decoded = jwt.decode(token, jwtSecret, true);
  const now = DateTime.now();
  const expiresIn = DateTime.fromSeconds(decoded.exp);

  const minimum = DateTime.min(now, expiresIn);
  if (minimum.equals(expiresIn)) throw new AuthError('token_expired');

  return token;
};

const initPassport = () => {
  const options = {
    secretOrKey: jwtSecret,
    jwtFromRequest: customExtractor,
  };

  passport.use(new Strategy(options, async (payload, done) => {
    const user = await userRepository.findById(payload.id);

    if (user) { return done(null, payload); }
    return done(new NotFoundError('user_not_found'), false);
  }));

  return passport;
};

const jwtAuth = () => passport.authenticate('jwt', { session: false });

module.exports = {
  initPassport,
  jwtAuth,
  customExtractor,
};
