const express = require('express');
const couserControllers = require('../../controllers/courseController')

const courseRouter = express.Router()

bookRouter
.route('/')
.get(bookControllers.index)
.post(bookControllers.create)


bookRouter
.route('/book/:id')
.get(bookControllers.show)
.patch(bookControllers.update)
.delete(bookControllers.delete)

module.exports = bookRouter;