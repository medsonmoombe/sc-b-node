const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const GroupSchema = new Schema({
    name: { type: String, required: true },
    members: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'User' , default: []}],
    posts: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Post' , default: [] }],
});

module.exports = mongoose.model('Group', GroupSchema);