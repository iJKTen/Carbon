/* eslint-disable new-cap */
'use strict';

const router = require('express').Router();
const { authController, authValidation } = require('../api/auth');
const { userController, userValidation } = require('../api/users');

router
    .post('/auth/login', authValidation.validateLoginSchema, authController.login)
    .post('/auth/logout', authController.logout)
    .post('/auth/forgotpassword', authValidation.forgotPassword, authController.forgotPassword)

    .get('/users/profile', [authValidation.verifyToken], userController.get)
    .get('/users/:email', userController.getByEmail)
    .get('/users/:username', userController.getByUsername)
    .post('/users', userValidation.validateRegisterSchema, userController.create);

module.exports = router;
