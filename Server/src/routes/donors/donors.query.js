

const donorsModel = require('../../models/donors.model')

function findFromLocation(long, lat, distance) {
    return donorsModel.
        find({ location: { $nearSphere: { $geometry: { type: "Point", coordinates: [long, lat] }, $maxDistance: distance } } }).lean().exec()
}

function findOneAndUpdate(id, update){
    return donorsModel.
    findByIdAndUpdate(id, update).exec()
}

function remove(id) {
    return donorsModel.
    findByIdAndRemove(id).lean().exec()
}

function add(item){
    const newDonor =new donorsModel(item)
    return newDonor.save()
}
module.exports = {
    findFromLocation, findOneAndUpdate, remove, add
}