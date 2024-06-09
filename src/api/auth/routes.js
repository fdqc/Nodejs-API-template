const { Router } = require('express');
const asyncWrapper = require('../../shared/utils/asyncWrapper');
const { signUp, login } = require('./controller');
const { jwtAuth } = require('../../loaders/passport');

const router = new Router();

router.post('/auth/signup', asyncWrapper(signUp));
router.post('/auth/login', asyncWrapper(login));

/**
 * Example usage of jwtAuth function
 * @example
 */
router.get(
  '/auth/test',
  jwtAuth(),
  (_req, res) => res.status(200).json({ message: 'ok' }),
);

module.exports = router;
