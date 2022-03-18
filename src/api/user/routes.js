const { Router } = require('express');
const { getUserList } = require('./controller');

const router = new Router();

router.get('/users', getUserList);

module.exports = router;
