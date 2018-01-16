const express = require('express');
const router = express.Router();
const controller = require('./user.controller');
const isAuthenticated = require('../util/auth');

router.post('/login', controller.login);

router.post('/register', controller.register);

router.post('/userInfo', controller.userInfo);

router.post('/seveInforMation', isAuthenticated, controller.seveInforMation);

router.post('/findInforMation', isAuthenticated, controller.findInforMation);

module.exports = router;