const router = require('express').Router()
const verifyAdmin = require('../../core/authentication').verifyAdmin;
const RestaurantModel = require('../../models/restaurantModel.js')
const NeighborhoodModel = require('../../models/neighborhoodModel.js')

module.exports = router
// Resataurants that lies in the same neighborhood as the query
router
    .get('/by_neighborhood/', (req, res) => {
        const { long, lat } = req.query
        NeighborhoodModel.findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [long, lat] } } } })
            .lean().exec((err, neighborhood) => {
                if (err) return res.status(422).send(err)
                RestaurantModel.find({ location: { $geoWithin: { $geometry: neighborhood.geometry } } }).lean().exec((err, restaurants) => {
                    if (err) return res.status(422).send('An error has occured while getting the restaurants.')
                    if (!restaurants) return res.status(422).send('No restaurants found with the sent data')
                    return res.status(200).json(restaurants)
                })
            })
    })
    // Resataurants that lies in the same neighborhood as the query
    .get('/by_location/', (req, res) => {
        const { long, lat, distance } = req.query
        RestaurantModel.find({ location: { $nearSphere: { $geometry: { type: "Point", coordinates: [long, lat] }, $maxDistance: distance } } }).lean().exec((err, restaurants) => {
            if (err) return res.status(400).json("Problematic input. Please only inpt nubers")
                /*istanbul ignore if*/
            if (!restaurants) return res.status(422).send('No restaurants found with the sent data')
            return res.status(200).json(restaurants)
        })
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


