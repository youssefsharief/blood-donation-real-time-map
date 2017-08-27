
const socketUtility = require('./socket.utility')
const joi = require('joi')

function onAudienceJoin(io, socket) {
    return socket.on('join', (payload) => {
        validateUserPayload(payload)
        socket._name = payload.name
        socket._type = 'audience'
        const newMember = { id: socket.id, name: payload.name }
        socket.join('main room')
        io.to('main room').emit('audience updated', socketUtility.getAudienceInRoom('main room', io))
        socket.emit('joined', newMember)
    });
}


const validateUserPayload = (payload) => {
    return joi.validate(payload, {
        name: joi.string(),
    })
}

function emitAudienceUpdated(io) {
    const audience = io.sockets.clien
    return io.to('main room').emit('audience updated', audience)
}

module.exports = {onAudienceJoin}