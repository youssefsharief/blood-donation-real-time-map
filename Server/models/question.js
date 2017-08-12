var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var questionSchema = new Schema({
    image: {
        type: String
    },
    text: {
        type: String,
        required: true
    },
    category: {
        type: Schema.Types.ObjectId,
        ref: "Category"
    },
    difficulty: {
        type: String,
        default: "medium"
    },
    answers: [new Schema({
        text: {
            type: String,
            required: false
        },
        correct: {
            type: Boolean,
            required: true,
            default: false
        },
    })],
    created: {
        type: Date,
        required: true,
        default: Date.now
    }
});



module.exports = {
    model: mongoose.model('Question', questionSchema)
}