
const {findFromLocation} = require('../query/donors.query')
function onNeedsData(io, socket) {
    return socket.on('needs data', (payload) => {
        if(payload.longitude)  {
                socket.longitude = payload.longitude
                socket.latitude = payload.latitude
            }

         if (socket.longitude)   {
            return findFromLocation(socket.longitude, socket.latitude).then((donors) => socket.emit('new data', donors))
         }
        
    })
}





module.exports = { onNeedsData }
