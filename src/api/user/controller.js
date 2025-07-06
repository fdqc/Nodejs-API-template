const userService = require('./service');

const getUsersList = async (req, res) => {
  const { page, pageSize } = req.query;

  const users = await userService.listUsers({ page, pageSize });

  return res.status(200).json({
    data: users,
  });
};

const setUserPermission = async (req, res) => {
  const { permissions } = req.body;
  const { id } = req.params;

  await userService.setPermissions({ id: parseInt(id, 10), permissions });
  return res.status(200).json({
    message: 'OK',
  });
};

module.exports = {
  getUsersList,
  setUserPermission,
};
