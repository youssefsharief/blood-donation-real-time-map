
// const neighborhoodModel = require('../models/neighborhood.model')
const restaurantModel = require('../../models/neighborhood.model')
const utility = require('../../helpers/utility.js')
const { findOneNeighborhood, findRestaurant, findByDistance} = require('./restaurants.query.js')


function getRestaurantsByNeighborhood(req, res, next) {
    return findOneNeighborhood(req.query.long, req.query.lat)
        .then((neighborhood) => {
            return findRestaurant(neighborhood.geometry)
                .then(restaurants => { return res.status(200).json(restaurants) })
                .catch(err => utility.badRequest(res, 'to find restaurants from neighborhood'))
        })
        .catch(err => utility.badRequest(res, 'to find neighborhood from given longitude and latitude'))
}


function getRestaurantsByLocation(req, res) {
    const { long, lat, distance } = req.query
    return findByDistance(long, lat, distance)
        .then((restaurants) => res.status(200).json(restaurants))
        .catch(err => utility.badRequest(res, 'to retrieve restaurants by location'))
}


function addRestaurant(req, res) {
    const { name, location } = req.body
    const newRes = new restaurantModel({ name, location})
    return newRes.save()
        .then((added) => res.status(200).json(added))
        .catch(err => utility.badRequest(res, 'to add this restaurant'))
}

module.exports = { getRestaurantsByNeighborhood, getRestaurantsByLocation, addRestaurant }