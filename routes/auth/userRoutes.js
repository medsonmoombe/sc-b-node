const express = require('express');
const authController = require('../../controllers/userController')

const authRouter = express.Router()

authRouter.post('/signup', authController.signup)

authRouter.post('/login', authController.login)
authRouter.post('/users', authController.users)
authRouter.post('/user/posts', authController.show)

module.exports = authRouter;