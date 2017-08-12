const router = require('express').Router()
var data = require('./countries.json')
const verifyAdmin = require('../../core/authentication').verifyAdmin;

module.exports = router

router
    .get('/', verifyAdmin, (req, res) => {
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


