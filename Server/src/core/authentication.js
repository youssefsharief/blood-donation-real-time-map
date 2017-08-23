
const jwt = require('jsonwebtoken');


module.exports = {
    setSecrets(app, config) {
        app.set('adminSecret', config.adminSecret);
        app.set('mobileSecret', config.mobileSecret);
    },
    verifyUser(req, res, next) {
        const token = req.body.token || req.params.token || req.headers['x-access-token'];
        if (!token) return res.status(401).send('No token provided.');
        if (token) {
            jwt.verify(token, req.app.get('mobileSecret'), function (err, decoded) {
                if (err) return res.status(401).send('Failed to authenticate token.');
                req.decoded = decoded;
                next();
            });
        }
    },
    verifyAdmin(req, res, next) {
        let token;
        if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer')
        { token = req.headers.authorization.split(' ')[1] }
        if (!token) return res.status(401).send('No token provided for admin.');
        if (token) {
            jwt.verify(token, req.app.get('adminSecret'), function (err, decoded) {
                if (err) return res.status(401).send('Failed to authenticate token.');
                req.decoded = decoded;
                next();
            });
        }
    },

};