const prisma = require('../../shared/utils/database');

const getAllUsers = async () => {
  try {
    return prisma.user.findMany();
  } catch (error) {
    console.error('getAllUsers', error);
    throw error;
  }
};

module.exports = {
  getAllUsers,
};
