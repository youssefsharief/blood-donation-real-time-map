

const donorsModel = require('../../models/donors.model')

function findFromLocation(long, lat, distance) {
    return donorsModel.
        find({ location: { $nearSphere: { $geometry: { type: "Point", coordinates: [long, lat] }, $maxDistance: distance } } }).lean().exec()
}

function findOneAndUpdate(id, update) {
    return donorsModel.findById(id).exec().then((item)=>{
        item.firstName = update.firstName
        item.lastName = update.lastName
        item.email = update.email
        item.telephone = update.telephone
        item.bloodGroup = update.bloodGroup
        item.location  = update.location || item.location
        return item.save()
    })
}

function remove(id) {
    return donorsModel.findByIdAndRemove(id).lean().exec()
}

function getOneById(id) {
    return donorsModel.findById(id).lean().exec()
}

function add(item) {
    const newDonor = new donorsModel(item)
    return newDonor.save()
}
module.exports = {
    findFromLocation, findOneAndUpdate, remove, add, getOneById
}