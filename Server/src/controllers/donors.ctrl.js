
const utility = require('../helpers/utility.js')
const { findOneAndUpdate, add, remove, getOneById} = require('../query/donors.query.js')





function addDonor(req, res) {
    let location = {
        coordinates: [req.body.longitude, req.body.latitude],
        type: "Point"
    }
    let ip = req.body.ip ? req.body.ip : "0.0.0.0.0"
    let { firstName, lastName,email, telephone,bloodGroup, address  } = req.body
    
    const newDonor = { firstName, lastName,email, telephone,bloodGroup, location, ip, address}
    return add (newDonor)
        .then((added) => res.status(200).json(added))
        .catch(err => console.log(err))
        
            // utility.badRequest(res, 'to add your info'))
}

// setInterval(()=>{
//     global.io.emit('updated')
// },300000)

function findDonorAndUpdate(req, res) {
    if (!req.body._id) utility.missingData(res, '_id')
    const { firstName, lastName,email, telephone,bloodGroup, location, _id, address  } = req.body
    const newDonor = { firstName, lastName,email, telephone,bloodGroup, location,address }
    return findOneAndUpdate(_id, newDonor)
        .then((added) => {
            global.io.emit('updated')
            res.status(200).json(added)
        })
        .catch(err =>  res.status(400).json(err))
            // utility.badRequest(res, 'to update your info'))
}


function removeDonor(req, res) {
    return remove(req.params.id)
        .then(() => res.status(200).json("Ok"))
        .catch(err => utility.badRequest(res, 'to add your info'))
}

function getDonorInfoById(req, res) {
    return getOneById(req.params.id)
        .then((item) => res.status(200).json(item))
        .catch(err => utility.badRequest(res, 'to add your info'))
}


module.exports = {  addDonor, findDonorAndUpdate, removeDonor, getDonorInfoById }