const prisma = require('../utils/database');

const createUser = async ({ username, email, hashedPassword }) => {
  const user = await prisma.user.create({
    data: {
      email,
      name: username,
      password: hashedPassword,
    },
  });

  return {
    id: user?.id,
    email: user.email,
    username: user.name,
  };
};

const findUserByEmail = async ({ email }) => {
  const user = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  return {
    id: user?.id,
    email: user?.email,
    username: user?.name,
    password: user?.password,
  };
};

const findUser = async ({ where }) => {
  const user = await prisma.user.findUnique({
    where,
  });

  return {
    id: user?.id,
    email: user?.email,
    username: user?.name,
    password: user?.password,
  };
};

module.exports = {
  createUser,
  findUserByEmail,
  findUser,
};
