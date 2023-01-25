const express = require('express');
const studentController = require('../../controllers/studentController')

const studentRouter = express.Router()
studentRouter.post('/new', studentController.create)
studentRouter.get('/:id', studentController.show)
studentRouter.delete('/:id', studentController.delete)
studentRouter.patch('/:id', studentController.update)

module.exports = studentRouter;