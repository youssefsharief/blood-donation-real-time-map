const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const saltFactor = 10;
const bcrypt = require('bcrypt')

const _schema = new Schema({
    email: {
        type: String,
        unique: "This email already exists",
        required: true
    },
    password: { type: String, required: true },
});

_schema.pre('save', function(next) {
    const user = this;
    if (!user.isModified('password')) return next();
    bcrypt.genSalt(saltFactor, function(err, salt) {
        if (err) return next(err);
        bcrypt.hash(user.password, salt, function(err, hash) {
            if (err) return next(err);
            user.password = hash;
            next();
        });
    });
});

_schema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};


module.exports =mongoose.model('User', _schema)
