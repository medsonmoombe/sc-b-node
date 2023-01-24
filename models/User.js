const Schema = mongoose.Schema;


const UserSchema = new Schema({
    username: { type: String, required: true },
    isAdmin: { type: Boolean, default: false},
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

module.exports = mongoose.model('User', UserSchema);