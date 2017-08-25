var express = require('express')
var router = express.Router()
const data = require('./entity.json')

module.exports = router



router.get('/deleteskutemplate', (req, res) => {
    res.json(data)
});