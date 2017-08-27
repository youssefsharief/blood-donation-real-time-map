

const neighborhoodModel = require('../../models/neighborhood.model')
const restaurantModel = require('../../models/neighborhood.model')


function findOneNeighborhood(long, lat) {
    neighborhoodModel.
        findOne({ geometry: { $geoIntersects: { $geometry: { type: "Point", coordinates: [long, lat] } } } }).lean().exec()
}

function findRestaurant(neighborhoodGeometry) {
    restaurantModel.
        find({ location: { $geoWithin: { $geometry: neighborhoodGeometry } } }).lean().exec()
}

function findByDistance(long, lat, distance) {
    restaurantModel.
        find({ location: { $nearSphere: { $geometry: { type: "Point", coordinates: [long, lat] }, $maxDistance: distance } } }).lean().exec()
}


module.exports = {
    findOneNeighborhood, findRestaurant, findByDistance
}