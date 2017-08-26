
module.exports = {
    instantiate(io) {
        io.of('/speaker').on('connection', (socket) => {
            socket.on('disconnect', () => {
                console.log('Client Disconnected');
                socket.disconnect();
                
            })


            socket.on('start', (payload) => {
                validateSpeakerPayload(payload)
                const speaker = { name: payload.name, id: socket.id, type: 'speaker', title: payload.title }
                socket._name = payload.name
                socket._type = 'speaker'
                socket._title = payload.title
                socket.join('main room')
                socket.emit('started', speaker)
                io.to('main room').emit('session started', { speakerName: speaker.name, title: payload.title })
            })


            socket.on('join', (payload) => {
                validateUserPayload(payload)
                socket._name = payload.name
                socket._type = 'audience'
                const newMember = { id: socket.id, name: payload.name }
                socket.join('main room')
                io.to('main room').emit('audience updated', socketUtility.getAudienceInRoom('main room', io))
                socket.emit('joined', newMember)
            });
        });
    },
}
function emitAudienceUpdated(io) {
    const audience = io.sockets.clien
    return io.to('main room').emit('audience updated', audience)
}

const validateSpeakerPayload = (payload) => {
    return joi.validate(payload, {
        name: joi.string(),
        title: joi.string()
    })
}
const validateUserPayload = (payload) => {
    return joi.validate(payload, {
        name: joi.string(),
    })
}


