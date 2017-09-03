
const {findFromLocation} = require('../query/donors.query')
function onNeedsData(io, socket) {
    return socket.on('needs data', (payload) => {
        console.log('111111111111');
        
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
