const { check } = require('express-validator');

const emailValidation = check('email')
  .exists({
    checkNull: true,
    checkFalsy: true,
  })
  .withMessage('email_required')
  .isEmail()
  .withMessage('invalid_email');

const passwordValidation = check('password')
  .exists({
    checkNull: true,
    checkFalsy: true,
  }).withMessage('password_required');

module.exports = {
  authValidation: [emailValidation, passwordValidation],
};
