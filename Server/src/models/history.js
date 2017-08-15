var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var deepPopulate = require('mongoose-deep-populate')(mongoose);


var historySchema = new Schema({
    user: {
        type: Schema.ObjectId,
        ref: 'User'
    },
    quiz: {
        type: Schema.ObjectId,
        ref: 'Quiz'
    },
    answers: [{
        question: {
            type: Schema.ObjectId,
            ref: 'Question'
        },
        correct:Boolean,
        choices:[Number]
    }],
    score: Number,
    startTimeStamp:{
        required:true,
        default: Date.now,
        type:Date
    },
    timeInSeconds: Number,
}, {
    strict: false
});



historySchema.plugin(deepPopulate, {
  populate: {
    'answers.question': {select: 'text answers -_id' },
    'answers.question.answers': {select: 'text correct -_id' },
}
})

module.exports = {
    model: mongoose.model('History', historySchema)
};