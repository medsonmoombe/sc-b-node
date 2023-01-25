const express = require('express');
const postController = require('../../controllers/postController')

const postRouter = express.Router()

postRouter.get('/', postController.index)

postRouter.post('/new', postController.create)
postRouter.get('/:id', postController.show)
postRouter.delete('/:id', postController.delete)
postRouter.patch('/:id', postController.update)

module.exports = postRouter;