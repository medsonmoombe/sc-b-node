const mongoose = require('mongoose');
const { ObjectId } = require('mongodb');
const Post = require('../models/Post');


/* GET POSTs PROFILE */ 
exports.index = async (req, res) => {
    const posts = await Post.find()
    res.json(posts)
   }

/* CREAT POST PROFILE */ 
exports.create = async (req, res) => {
    const post = req.body
    if(!mongoose.Types.ObjectId.isValid(post.author.trim())) {
       res.json({error: "author invalid, author must exist..."})
    }
   const newPost = await Post.create(post)
    res.json(newPost)
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