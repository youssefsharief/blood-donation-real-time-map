var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var categorySchema = new Schema({
    name: {
        type: String,
        required: true
    },
});

module.exports = {
    model: mongoose.model('Category', categorySchema)
}
