const { validationResult } = require('express-validator');

const validateResult = (req, res, next) => {
  const result = validationResult(req);

  if (!result.isEmpty()) {
    const message = result.errors.map((item) => ({ message: item.msg }));
    return res.status(400).json({
      errors: message,
    });
  }

  return next();
};

module.exports = validateResult;
