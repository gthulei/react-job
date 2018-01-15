const express = require('express');
const router = express.Router();
const controller = require('./user.controller')

router.post('/login', controller.login);

router.post('/register', controller.register);

router.post('/userInfo', controller.userInfo);


module.exports = router;