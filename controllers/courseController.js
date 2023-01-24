const { ObjectId } = require('mongodb');

const Course = require('../models/Course');

exports.index = async (req, res) => {
    const courses = await Course.find()
    res.json(courses)
   }

exports.create = async (req, res) => {
    await Course.create(req.body)
    res.json(req.body)
    }

exports.show = async (req, res) => {
    const _id = req.params.id
    const course = await Course.find({_id})
    res.json(course)
}

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