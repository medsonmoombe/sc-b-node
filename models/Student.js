const Schema = mongoose.Schema;


const StudentSchema = new Schema({
    name: { type: String, required: true },
    group: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
    email: { type: String, required: true },
    image: { type: String },
    inbox: {type: String},
    desc: { type: String},
    Address: {type: String, required: true},
    phone_number: { type: String, },
    whatsApp: { type: String},
    course: [{ type: Schema.Types.ObjectId, ref: 'Teacher' }],
});

module.exports = mongoose.model('Student', StudentSchema);