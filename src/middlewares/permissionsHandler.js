const shiroTrie = require('shiro-trie');
const ForbiddenError = require('../shared/errors/forbiddenError');

const checkPermissions = (permissions) => (req, _res, next) => {
  const checksArr = [];
  const userPermissions = shiroTrie.newTrie();
  userPermissions.add(req.user.permissions);

  // eslint-disable-next-line no-restricted-syntax
  for (const permission of permissions) {
    checksArr.push(userPermissions.check(permission));
  }

  if (checksArr.indexOf(false) !== -1) {
    throw new ForbiddenError('Forbidden');
  } else {
    next();
  }
};

module.exports = { checkPermissions };
