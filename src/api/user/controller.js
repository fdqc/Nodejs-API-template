const { getAllUsers } = require('./service');

const getUserList = async (_req, res) => {
  const users = await getAllUsers();
  return res.status(200).json({
    data: users,
  });
};

module.exports = {
  getUserList,
};
