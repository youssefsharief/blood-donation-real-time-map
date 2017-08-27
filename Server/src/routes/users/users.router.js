var jwt = require('jsonwebtoken');
const router = require('express').Router()
const verifyAdmin = require('../../core/authentication').verifyAdmin;
const RestaurantModel = require('../../models/restaurant.model.js')
const UserModel = require('../../models/userModel.js')

module.exports = router
router.get('/', function (req, res) {
    UserModel.find().lean().exec((err, user) => {
        if (err) return res.status(400).json("Error while getting user")
        if (!user) return res.status(400).json("No user Found")
        return res.status(200).json(user)
    })

});
router.delete('/:id', function(req, res) {
    const {id} = req.params
    UserModel.findById(id).remove().exec(function(err, user) {
        if (err) return res.status(400).send('An error has occured while deleting the user.');
        if (!user) return res.status(400).send('No user with this id is found');
        return res.json(user);
    });
});

// Resataurants that lies in the same neighborhood as the query
router.post('/login', function (req, res) {
    if (req.body.email == null) return res.status(400).send('Missing email.');
    if (req.body.password == null) return res.status(400).send('Missing password.');
    if (!req.body.version) return res.send('Please update your application');
    UserModel.findOne({ email: req.body.email.toLowerCase() })
        .populate('division', 'name _id colorTheme')
        .select('email division _id firstName lastName push_token salt hash')
        .exec(function (err, user) {
            if (err) return res.status(500).send("An unknown error occurred");
            if (!user) return res.status(400).send("Your account has been terminated");
            if (!user.division) return res.status(200).send("Sorry, currently you are not assigned to a division. Please contact your administrator")
            var hash = crypto.pbkdf2Sync(req.body.password, user.salt, 1000, 64).toString('hex');
            if (user.hash !== hash) return res.status(401).send('Password and/or email are not correct');
            var token = jwt.sign({
                _id: user._id
            }, req.app.get('mobileSecret'), {
                    expiresIn: 60 * 60 * 24 * 365
                });
            return res.status(200).json({
                user: {
                    email: user.email,
                    division: { _id: user.division._id, name: user.division.name, colorTheme: user.division.colorTheme },
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    push_token: user.push_token
                },
                token: token
            });
        });
});

router.post('/signup', function (req, res) {
    const { email, password } = req.body
    if (!email || !password) {
        return res.status(400).send('An error has occured while creating the user.');
    }
    var newUser = new UserModel({ email, password });

    // Saving the user. If saved successfully send an email with credintials
    newUser.save(function (err, savedUser) {
        if (err) return res.status(400).send('An error has occured while saving the password.');
        return res.status(200).json(savedUser);

    });
});




