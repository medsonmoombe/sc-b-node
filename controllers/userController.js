const { ObjectId } = require('mongodb');
const Post = require('../models/Post');
const User = require('../models/User');
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
const saltRounds = 10;

  /* CREAT USER */ 
exports.signup = async (req, res) => {
    const password = await bcrypt.hash(req.body.password, saltRounds);
    const data = { ...req.body, password }
    const user = await User.create(data)
    res.json({ user })
}

// LIST USERS
exports.users = async (req, res) => {
    const user = await User.find();
    const data = { ...req.body, password }
    res.json({ data })
}

//LOGIN
exports.login = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
        res.json({ data: 'user not found' })
        return
    }
    if (! await bcrypt.compare(req.body.password, user.password)) {
        res.json({ data: 'user not found' })
        return
    }

    const token = jwt.sign({ user}, 'fake-jwt-token')
    res.json({ user, access_token: token })
}

/* LIST USERS */

exports.index = async (req, res) => {
    const users = await User.find()
    res.json(courses)
   }

   /* GET USER POSTS PROFILE */ 
exports.show = async (req, res) => {
    const _id = req.body.id
    const user_id = await User.find({_id})
    console.log(_id);
    const userPost = await Post.find({ author: user_id})
    // const post = await Post.find().populate('author');
    res.json(userPost)
   }
 

// exports.show = async (req, res) => {
//     const _id = req.params.id
//     const course = await Course.find({_id})
//     res.json(course)
// }

// exports.update = async (req, res) => {
//     const _id = ObjectId(req.params.id)
 
//     const book = await Book.updateOne({ _id }, { $set: req.body  })
//     res.json(book)
//  }

//  exports.delete = async (req, res) => {
//     const _id = ObjectId(req.params.id)
 
//     const book = await Book.deleteOne({ _id })
//     res.json({ notice: " Book  deleted successfully"})
//  }
