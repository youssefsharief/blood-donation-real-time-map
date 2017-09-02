// const { onAudienceJoin } = require('./socket.audience')
const { onNeedsData } = require('./socket.onNeedsData')



const onConnection = (io) =>
    io.on('connection', (socket) => {
        console.log('Connection started');
        socket.on('disconnect', () => {
            console.log('Client Disconnected');
            socket.disconnect();
        })
        onNeedsData(io, socket)
        // onAudienceJoin(io, socket)
    })


module.exports = { onConnection }




