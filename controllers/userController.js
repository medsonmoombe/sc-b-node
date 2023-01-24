const { ObjectId } = require('mongodb');

const User = require('../models/User');

/* LIST USERS */

exports.index = async (req, res) => {
    const users = await User.find()
    res.json(courses)
   }

  /* CREAT USER */ 
exports.create = async (req, res) => {
    await User.create(req.body)
    res.json(req.body)
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