const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = new Schema({
    location: new Schema({
        coordinates: {  type: [Number], required: true  },
        type: {type: String, required: true}
    }),
    name: {type: String, required: true},
});




module.exports = mongoose.model('Restaurant', _schema)
