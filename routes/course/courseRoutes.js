const express = require('express');
const couserControllers = require('../../controllers/courseController')

const courseRouter = express.Router()

courseRouter
.route('/')
.get(couserControllers.index)
.post(couserControllers.create)


courseRouter
.route('/course/:id')
.get(couserControllers.show)

module.exports = courseRouter;