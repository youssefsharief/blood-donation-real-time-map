const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const _schema = new Schema({
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    email: {type: String, required: true},
    telephone: {type: String, required: true},
    bloodGroup: {type: String, required: true},
    ip: {type: String, required: true},
    location: new Schema({
        coordinates: {  type: [Number], required: true  },
        type: {type: String, required: true}
    }),
});




module.exports = mongoose.model('Donor', _schema)
