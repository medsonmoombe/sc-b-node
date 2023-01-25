const express = require('express');
const groupControllers = require('../../controllers/groupController')

const groupRouter = express.Router()

groupRouter
.route('/')
.get(groupControllers.index)
.post(groupControllers.create)


groupRouter
.route('/group/:id')
.get(groupControllers.show)

module.exports = groupRouter;