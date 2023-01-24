const { ObjectId } = require('mongodb');
const Post = require('../models/Post');


/* GET POSTs PROFILE */ 
exports.index = async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
   }

/* CREAT POST PROFILE */ 
exports.create = async (req, res) => {
    await Post.create(req.body)
    res.json(req.body)
    }

/* SHOW POST PROFILE */ 
exports.show = async (req, res) => {
    const _id = req.params.id
    const post = await Post.find({_id})
    res.json(post)
}

 /* UPDATE POST PROFILE */ 
exports.update = async (req, res) => {
    const _id = ObjectId(req.params.id)
 
    const post = await Post.updateOne({ _id }, { $set: req.body  })
    res.json(post)
 }

  /* DELETE POST PROFILE */ 
 exports.delete = async (req, res) => {
    const _id = ObjectId(req.params.id)
    const post = await Post.deleteOne({ _id })
    res.json({ notice: " Post  deleted successfully"})
 }