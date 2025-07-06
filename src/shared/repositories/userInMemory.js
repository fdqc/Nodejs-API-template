/**
 * This module is used just for test and development purposes.
 * You should not use it for production.
 */
const users = [];

const insert = async ({ username, email, hashedPassword }) => {
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

const findByEmail = async ({ email }) => users.find((u) => u.email === email);

const findById = async (id) => users.find((u) => u.id === id);

const findMany = async ({ skip, take }) => {
  const startIndex = skip;
  const endIndex = startIndex + take;

  return users.slice(startIndex, endIndex).map((user) => ({
    id: user.id,
    email: user.email,
    username: user.username,
    permissions: user.permissions || [],
  }));
};

const updateOne = async ({ id }, { permissions }) => {
  const userIndex = users.findIndex((u) => u.id === id);

  if (userIndex !== -1) {
    users[userIndex].permissions = permissions;
  }
};

module.exports = {
  insert,
  findByEmail,
  findById,
  findMany,
  updateOne,
};
