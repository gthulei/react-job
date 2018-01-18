const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const isAuthenticated = require('../util/auth');

router.post('/login', controller.login);

router.post('/register', controller.register);

router.post('/userInfo', controller.userInfo);

router.post('/escLogin', controller.escLogin);

router.post('/seveInforMation', isAuthenticated, controller.seveInforMation);

router.post('/findInforMation', isAuthenticated, controller.findInforMation);

router.post('/findUserList', controller.findUserList);

module.exports = router;