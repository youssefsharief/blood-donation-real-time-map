const { onAudienceJoin } = require('./socket.audience')
const { onSpeakerStart } = require('./socket.speaker')



const onConnection = (io) =>
    io.on('connection', (socket) => {
        console.log('Connection started');
        socket.on('disconnect', () => {
            console.log('Client Disconnected');
            socket.disconnect();
        })
        onSpeakerStart(io, socket)
        onAudienceJoin(io, socket)
    })


module.exports = { onConnection }




