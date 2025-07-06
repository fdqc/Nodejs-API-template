const { check } = require('express-validator');

const permissionsValidation = check('permissions')
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('permissions attribute is required');

module.exports = {
  setPermissionsValidation: [permissionsValidation],
};
