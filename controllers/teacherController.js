const { ObjectId } = require('mongodb');

const Teacher = require('../models/Teacher');

/* CREAT TEACHER PROFILE */ 
exports.create = async (req, res) => {
    await Teacher.create(req.body)
    res.json(req.body)
    }

/* SHOW TEACHER PROFILE */ 

exports.show = async (req, res) => {
    const _id = req.params.id
    const teacher = await Teacher.find({_id})
    res.json(teacher)
}

 /* UPDATE TEACHER PROFILE */ 

exports.update = async (req, res) => {
    const _id = ObjectId(req.params.id)
 
    const teacher = await Teacher.updateOne({ _id }, { $set: req.body  })
    res.json(teacher)
 }

  /* DELETE TEACHER PROFILE */ 

 exports.delete = async (req, res) => {
    const _id = ObjectId(req.params.id)
 
    const teacher = await Teacher.deleteOne({ _id })
    res.json({ notice: " teacher  deleted successfully"})
 }