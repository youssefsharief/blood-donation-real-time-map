const router = require('express').Router()
const verifyAdmin = require('../../core/authentication').verifyAdmin;
const RestaurantModel = require('../../models/restaurantModel.js')
const NeighborhoodModel = require('../../models/neighborhoodModel.js')

module.exports = router
// Resataurants that lies in the same neighborhood as the query
router
    .get('/neighborhood/', (req, res) => {
        const { long, lat } = req.query
        NeighborhoodModel.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [long, lat] } } } })
            .lean().exec((err, neighborhood) => {
                if (err) return res.status(422).send(err)
                RestaurantModel.find({ location: { $geoWithin: { $geometry: neighborhood.geometry } } }).count().lean().exec((err, restaurants) => {
                    if (err) return res.status(422).send('An error has occured while getting the restaurants.')
                    if (!restaurants) return res.status(422).send('No restaurants found with the sent data')
                    return res.json(restaurants)
                })
            })
    })
    // Resataurants that lies in the same neighborhood as the query
    .get('/location/', (req, res) => {
        const { long, lat, distance } = req.query
        RestaurantModel.find({ location: { $nearSphere: { $geometry: { type: "Point", coordinates: [long, lat] }, $maxDistance: distance } } }).lean().exec((err, restaurants) => {
            if (err) return res.json(err)
            if (!restaurants) return res.status(422).send('No restaurants found with the sent data')
            return res.json(restaurants)
        })
    })
    .delete('/:id', (req, res) => {
        data = data.filter(x => x.countryId != req.params.id)
        return res.json(data);
    })
    .post('/', (req, res) => {
        const restaurant = new RestaurantModel({
            name: "Buffalo Burger",
            location: { coordinates: [500000, 555555555555589] }
        })
        restaurant.save((err, obj) => {
            if (err) return res.status(422).send('An error has occured while creating the category.')
            return res.send(obj);
        })
    })


