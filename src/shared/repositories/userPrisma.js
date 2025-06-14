const prisma = require('../utils/database');

const create = async ({ username, email, hashedPassword }) => {
  const user = await prisma.user.create({
    data: {
      email,
      username,
      password: hashedPassword,
    },
  });

  return {
    id: user?.id,
    email: user.email,
    username: user.username,
  };
};

const findByEmail = async ({ email }) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return {
    id: user?.id,
    email: user?.email,
    username: user?.username,
    password: user?.password,
  };
};

const findById = async (id) => {
  const user = await prisma.user.findUnique({
    where: { id },
  });

  return {
    id: user?.id,
    email: user?.email,
    username: user?.username,
    password: user?.password,
  };
};

module.exports = {
  create,
  findByEmail,
  findById,
};
