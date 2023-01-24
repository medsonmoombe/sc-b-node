const Schema = mongoose.Schema;


const PostSchema = new Schema({
    title: { type: String, required: true },
    desc: { type: String, required: true } ,
    image: { type: String },
    author: [{ type: Schema.Types.ObjectId, ref: 'User' }],
});

module.exports = mongoose.model('Post', PostSchema);