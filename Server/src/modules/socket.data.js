
const {findFromLocation} = require('../routes/donors/donors.query')
function onLocationChanged(io, socket) {
    return socket.on('location changed', (payload) => {
        socket.logitude = payload.logitude
        socket.latitude = payload.latitude
        return findFromLocation(socket.logitude, socket.latitude).then((donors) => socket.emit('new data', donors))
    })
}





module.exports = { onLocationChanged }
