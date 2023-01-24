const Schema = mongoose.Schema;


const CourseShema = new Schema({
    title: { type: String, required: true },
    member: { type: Array, default: [] },
    description: { type: String, required: true },
    image: { type: String }
});

module.exports = mongoose.model('Course', CourseShema);