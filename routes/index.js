const express = require('express')
const router = express.Router();
const authRouter = require('./auth/userRoutes');
const postRouter= require('./post/postRoutes');
const courseRouter = require('./course/courseRoutes');
const groupRouter = require('./group/groupRoutes');
const studentRouter = require('./student/studentRoutes');



router.use('/auth', authRouter)
router.use('/posts', postRouter)
router.use('/courses', courseRouter)
router.use('/groups', groupRouter)
router.use('/students', studentRouter)


router.all('/*', (req, res) => {
    res.send('Page Not Found')
})

module.exports = router;