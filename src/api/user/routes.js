const { Router } = require('express');
const { getUsersList, setUserPermission } = require('./controller');
const { jwtAuth } = require('../../loaders/passport');
const { checkPermissions } = require('../../middlewares/permissionsHandler');
const asyncWrapper = require('../../shared/utils/asyncWrapper');
const { setPermissionsValidation } = require('./validations');

const router = new Router();

router.get(
  '/users',
  jwtAuth(),
  checkPermissions(['users:list']),
  asyncWrapper(getUsersList),
);

router.put(
  '/users/:id/permissions',
  jwtAuth(),
  checkPermissions(['users:permissions:create']),
  setPermissionsValidation,
  asyncWrapper(setUserPermission),
);

module.exports = router;
