const router = require('express').Router()
const verifyAdmin = require('../../core/authentication').verifyAdmin;
const NeighborhoodModel = require('../../models/neighborhoodModel.js')
module.exports = router

router
    .get('/', (req, res) => {
        console.log(req.query.long);
        console.log(req.query.lat);
        // const loc = req.body.location
        NeighborhoodModel.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [-73.93414657, 40.82302903] } } } }).lean().exec((err, neighborhood) => {
            if (err) return res.status(422).send('An error has occured while getting the neighborhood.')
            return res.json(neighborhood)
        })
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


