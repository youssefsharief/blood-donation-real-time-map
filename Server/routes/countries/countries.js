const router = require('express').Router()
var data = require('./countries.json')
module.exports = router

router
    .get('/', function (req, res) {
        return res.json(data)
    })
    .delete('/:id', (req, res) => {
        data = data.filter(x => x.countryId != req.params.id)
        return res.json(data);
    })
    .post('/', (req, res) => {
        req.body.id = Math.random
        data.push(req.body)
        return res.json(data);
    })


