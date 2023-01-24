const { ObjectId } = require('mongodb');

const Student = require('../models/Student');

/* CREAT STUDENT PROFILE */ 
exports.create = async (req, res) => {
    await Student.create(req.body)
    res.json(req.body)
    }

/* SHOW STUDENT PROFILE */ 

exports.show = async (req, res) => {
    const _id = req.params.id
    const student = await Student.find({_id})
    res.json(student)
}

 /* UPDATE STUDENT PROFILE */ 

exports.update = async (req, res) => {
    const _id = ObjectId(req.params.id)
 
    const teacher = await Student.updateOne({ _id }, { $set: req.body  })
    res.json(teacher)
 }

  /* DELETE STUDENT PROFILE */ 

 exports.delete = async (req, res) => {
    const _id = ObjectId(req.params.id)
 
    const student = await Student.deleteOne({ _id })
    res.json({ notice: " Student  deleted successfully"})
 }