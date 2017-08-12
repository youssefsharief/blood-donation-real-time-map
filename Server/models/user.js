var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
    email: {
        type: String,
        unique: "This email already exists",
        required: true
    },
    firstName: String,
    lastName: String,
    division: {
        type: Schema.Types.ObjectId,
        ref: 'Division',
    },
    hash: String,
    salt: String,
    push_token: String,
});



module.exports = {
    model: mongoose.model('User', userSchema)
};