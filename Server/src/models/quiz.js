var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var quizSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: Schema.ObjectId,
        ref: 'Category'
    },
    questions: [{
        type: Schema.ObjectId,
        ref: 'Question'
    }],
    timeLimit: {
        type: Number,
        required: true,
        default:12
    },
    mandatory: {
        type: Boolean,
        required: true,
        default: true
    },
    isAbstract: {
        type: Boolean,
        required:true,
        default: false
    },
    randomQuestionsCount: {
        type: Number,
        default: null
    },
    randomDifficulty: {
        type: String,
        default: null,
    }
});

module.exports = {
    model: mongoose.model('Quiz', quizSchema)
};