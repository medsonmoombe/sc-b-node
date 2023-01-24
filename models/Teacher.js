const Schema = mongoose.Schema;


const TeacherSchema = new Schema({
    userId:[{ type: Schema.Types.ObjectId, ref: 'User' }],
    name: { type: String, required: true },
    group: [{ type: Schema.Types.ObjectId, ref: 'Group' }],
    email: { type: String, required: true },
    image: { type: String },
    inbox: {type: String},
    desc: { type: String},
    Address: {type: String, required: true},
    phone_number: { type: String, },
    whatsApp: { type: String},
    course: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
});

module.exports = mongoose.model('Teacher', TeacherSchema);