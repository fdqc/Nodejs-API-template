/**
 * This module is used just for test and development purposes.
 * You should not use it for production.
 */
const users = [];

const create = async ({ username, email, hashedPassword }) => {
  users.push({
    id: null,
    email,
    username,
    password: hashedPassword,
  });

  const userIndex = users.findIndex((u) => u.email === email);
  users[userIndex].id = userIndex + 1;

  return {
    id: userIndex,
    email,
    username,
  };
};

const findByEmail = async ({ email }) => {
  const user = users.find((u) => u.email === email);

  return {
    id: user?.id,
    email: user?.email,
    username: user?.username,
    password: user?.password,
  };
};

const findById = async (id) => {
  const user = users.find((u) => u.id === id);

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
