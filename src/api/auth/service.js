const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const { DateTime } = require('luxon');

const { saltRounds, jwtSecret, tokenExpiresInSeconds } = require('../../config');
const AuthError = require('../../shared/errors/authError');
const NotFoundError = require('../../shared/errors/notFoundError');
const userRepository = require('../../shared/repositories/user');

const comparePassword = async (password, hashedPassword) => {
  const passwordsMatch = await bcrypt.compare(password, hashedPassword);
  return passwordsMatch;
};

const generateExpiryDate = () => {
  const now = DateTime.now().toString();
  const expiresIn = DateTime.fromISO(now)
    .plus({ seconds: tokenExpiresInSeconds })
    .toSeconds()
    .toString()
    .split('.')[0];

  return parseInt(expiresIn, 10);
};

const generateToken = ({ id, permissions }) => {
  const token = jwt.encode({
    id,
    permissions,
    exp: generateExpiryDate(),
  }, jwtSecret);

  return token;
};

const registerUser = async ({ username, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = await userRepository.insert({ username, email, hashedPassword });
  return generateToken({ id: user.id, permissions: user.permissions || [] });
};

const logUser = async ({ email, password }) => {
  const user = await userRepository.findByEmail({ email });

  if (!user) {
    throw new NotFoundError('User not found');
  }

  const passwordsMatch = await comparePassword(password, user.password);

  if (!passwordsMatch) {
    throw new AuthError('Unauthorized');
  }

  return generateToken({ id: user.id, permissions: user.permissions });
};

module.exports = {
  registerUser,
  logUser,
};
