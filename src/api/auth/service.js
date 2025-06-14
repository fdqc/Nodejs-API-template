const bcrypt = require('bcrypt');
const jwt = require('jwt-simple');
const { DateTime } = require('luxon');

const { saltRounds, jwtSecret, tokenExpiresInSeconds } = require('../../config');
const AuthError = require('../../shared/errors/authError');
const NotFoundError = require('../../shared/errors/notFoundError');

// This is an example of how you can switch between two different repositories
const userRepository = require('../../shared/repositories/userPrisma');
// const userRepository = require('../../shared/repositories/userInMemory');

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

const generateToken = ({ id }) => {
  const token = jwt.encode({
    id,
    exp: generateExpiryDate(),
  }, jwtSecret);

  return token;
};

const registerUser = async ({ username, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  const user = await userRepository.create({ username, email, hashedPassword });
  return generateToken({ id: user.id });
};

const logUser = async ({ email, password }) => {
  const user = await userRepository.findByEmail({ email });

  if (!user.id) {
    throw new NotFoundError('user_not_found');
  }

  const passwordsMatch = await comparePassword(password, user.password);

  if (!passwordsMatch) {
    throw new AuthError('unauthorized');
  }

  return generateToken({ id: user.id });
};

module.exports = {
  registerUser,
  logUser,
};
