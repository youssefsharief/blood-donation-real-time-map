var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var divisionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    categories: [{
        type: Schema.ObjectId,
        ref: 'Category'
    }],
    colorTheme: {type:Number, default:1},
},{
    strict: false
});


module.exports = {
    model: mongoose.model('Division', divisionSchema)
};