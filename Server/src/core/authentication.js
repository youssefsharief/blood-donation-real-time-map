
const jwt = require('jsonwebtoken');
const _ = require('lodash')
var fs = require('fs')

module.exports = {
    getTokenFromRequest,
    jwtVerification,
    setSecrets: (app, config) => {
        app.set('adminSecret', config.adminSecret);
        app.set('mobileSecret', config.mobileSecret);
    },
    verifyMobile: (req, res, next) => verifyBasedOnUser(req, res, next, 'mobileSecret'),
    verifyAdmin: (req, res, next) => verifyBasedOnUser(req, res, next, 'adminSecret')
};

function verifyBasedOnUser(req, res, next, secret) {
    const token = getTokenFromRequest(req)
    if (!token) return res.status(401).send('No token provided for admin.');
    if (token) jwtVerification(token, req.app.get(secret), req, res, next)
}
    
function getTokenFromRequest(req) {
    const hasField = _.has(req, "headers.authorization")
    if (hasField) return req.headers.authorization.split(' ')[1]
    else return false
}

function jwtVerification(token, secret, req, res, next) {
    return jwt.verify(token, secret, function (err, decoded) {
        if (err) return res.status(401).send('Failed to authenticate token.');
        req.decoded = decoded;
        next();
    });
}