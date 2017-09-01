
const utility = require('../../helpers/utility.js')
const { findFromLocation, findOneAndUpdate, add, remove, getOneById} = require('./donors.query.js')




function getDonorsByLocation(req, res) {
    const { long, lat, distance } = req.query
    return findFromLocation(long, lat, distance)
        .then((donors) => res.status(200).json(donors))
        .catch(err => utility.badRequest(res, 'to retrieve donors by location'))
}


function addDonor(req, res) {
    let location = {
        coordinates: req.body.location,
        type: "Point"
    }
    let ip = req.body.ip ? req.body.ip : "0.0.0.0.0"
    let { firstName, lastName,email, telephone,bloodGroup  } = req.body
    
    const newDonor = { firstName, lastName,email, telephone,bloodGroup, location, ip}
    return add (newDonor)
        .then((added) => res.status(200).json(added))
        .catch(err => console.log(err))
        
            // utility.badRequest(res, 'to add your info'))
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

function getDonorInfoById(req, res) {
    return getOneById(req.params.id)
        .then((item) => res.status(200).json(item))
        .catch(err => utility.badRequest(res, 'to add your info'))
}


module.exports = { getDonorsByLocation, addDonor, findDonorAndUpdate, removeDonor, getDonorInfoById }