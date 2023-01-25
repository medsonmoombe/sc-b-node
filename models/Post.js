const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const PostSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true } ,
    image: { type: String },
    author: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User'}],
});

module.exports = mongoose.model('Post', PostSchema);