
// const neighborhoodModel = require('../models/neighborhood.model')
const donorModel = require('../../models/donors.model')
const utility = require('../../helpers/utility.js')
const { findFromLocation, findOneAndUpdate, add, remove} = require('./donors.query.js')




function getDonorsByLocation(req, res) {
    const { long, lat, distance } = req.query
    return findFromLocation(long, lat, distance)
        .then((donors) => res.status(200).json(donors))
        .catch(err => utility.badRequest(res, 'to retrieve donors by location'))
}


function addDonor(req, res) {
    const { firstName, lastName,email, telephone,bloodGroup, location, ip  } = req.body
    const newDonor = { firstName, lastName,email, telephone,bloodGroup, location, ip}
    return add (newDonor)
        .then((added) => res.status(200).json(added))
        .catch(err => utility.badRequest(res, 'to add your info'))
}


function findDonorAndUpdate(req, res) {
    const { firstName, lastName,email, telephone,bloodGroup, location, ip, id  } = req.body
    const newDonor = { firstName, lastName,email, telephone,bloodGroup, location, ip}
    return findOneAndUpdate(id, newDonor)
        .then((added) => res.status(200).json(added))
        .catch(err => utility.badRequest(res, 'to add your info'))
}


function removeDonor(req, res) {
    return remove(req.body.id)
        .then(() => res.status(200).json("Ok"))
        .catch(err => utility.badRequest(res, 'to add your info'))
}

module.exports = { getDonorsByLocation, addDonor, findDonorAndUpdate, removeDonor }