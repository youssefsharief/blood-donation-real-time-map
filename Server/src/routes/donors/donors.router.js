const router = require('express').Router()
const {getDonorsByLocation, addDonor, findDonorAndUpdate, removeDonor} = require('./donors.ctrl')



router.get('/', getDonorsByLocation)
router.post('/', addDonor)
router.put('/', findDonorAndUpdate)
router.delete('/', removeDonor)

module.exports = router