const joi = require('joi')

function onSpeakerStart(io, socket) {
    return socket.on('start', (payload) => {
        validateSpeakerPayload(payload)
        const speaker = { name: payload.name, id: socket.id, type: 'speaker', title: payload.title }
        socket._name = payload.name
        socket._type = 'speaker'
        socket._title = payload.title
        socket.join('main room')
        socket.emit('started', speaker)
        io.to('main room').emit('session started', { speakerName: speaker.name, title: payload.title })
    })
}



const validateSpeakerPayload = (payload) => {
    return joi.validate(payload, {
        name: joi.string(),
        title: joi.string()
    })
}

module.exports = {onSpeakerStart}