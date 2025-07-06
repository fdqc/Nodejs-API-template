const { check } = require('express-validator');

const emailValidation = check('email')
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('email required')
  .isEmail()
  .withMessage('invalid email');

const passwordValidation = check('password')
  .exists({
    checkNull: true,
    checkFalsy: true,
  }).withMessage('password required');

module.exports = {
  authValidation: [emailValidation, passwordValidation],
};
