const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = new Schema({
    geometry: new Schema({
        type: {  type: [String], required: true  },
        coordinates: {type: [[Number]], required: true}
    }),
    name: {type: String, required: true},
});

module.exports = mongoose.model('Neighborhood', _schema)