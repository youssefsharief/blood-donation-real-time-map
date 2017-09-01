const router = require('express').Router()
const {getDonorsByLocation, addDonor, findDonorAndUpdate, removeDonor, getDonorInfoById} = require('./donors.ctrl')



router.get('/', getDonorsByLocation)
router.get('/:id', getDonorInfoById)
router.post('/', addDonor)
router.put('/', findDonorAndUpdate)
router.delete('/', removeDonor)

module.exports = router