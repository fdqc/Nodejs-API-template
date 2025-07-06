const userRepository = require('../../shared/repositories/user');
const NotFoundError = require('../../shared/errors/notFoundError');

const listUsers = async ({ page = 1, pageSize = 10 }) => {
  const skip = (page - 1) * pageSize;
  return userRepository.findMany({ skip, take: pageSize });
};

const setPermissions = async ({ id, permissions }) => {
  const user = await userRepository.findById(id);

  if (!user) {
    throw new NotFoundError('User not found');
  }

  await userRepository.updateOne({ id }, { permissions });
};

module.exports = {
  listUsers,
  setPermissions,
};
