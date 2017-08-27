const router = require('express').Router()
const {getRestaurantsByNeighborhood, getRestaurantsByLocation, addRestaurant} = require('./restaurants.ctrl')



router.get('/by_neighborhood/', getRestaurantsByNeighborhood)
router.get('/by_location/', getRestaurantsByLocation)
router.post('/', addRestaurant)

module.exports = router