var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    email: {
        type: String,
        required: true,
    },
    firstName: String,
    lastName: String,
    hash: String,
    salt: String
});


module.exports = {
    model: mongoose.model('Admin', adminSchema)
};