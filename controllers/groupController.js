const { ObjectId } = require('mongodb');

const Group = require('../models/Group');

exports.index = async (req, res) => {
    const groups = await Group.find()
    res.json(groups)
   }

exports.create = async (req, res) => {
    await Group.create(req.body)
    res.json(req.body)
    }

exports.show = async (req, res) => {
    const _id = req.params.id
    const group = await group.find({_id})
    res.json(group)
}