const { onAudienceJoin } = require('./socket.audience')
const { onLocationChanged } = require('./socket.data')



const onConnection = (io) =>
    io.on('connection', (socket) => {
        console.log('Connection started');
        socket.on('disconnect', () => {
            console.log('Client Disconnected');
            socket.disconnect();
        })
        onLocationChanged(io, socket)
        onAudienceJoin(io, socket)
    })


module.exports = { onConnection }




