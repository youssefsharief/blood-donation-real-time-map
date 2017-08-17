const joi = require('joi')
let io
let audience = []
let connections = []
let speaker = {}
let title
module.exports = {
    instantiate(server) {
        io = require('socket.io')(server);
        io.sockets.setMaxListeners(1000)
        io.on('connection', (socket) => {
            connections.push(socket);
            console.log('Client Connected');

            socket.on('disconnect', () => {
                connections.splice(connections.indexOf(socket), 1);
                console.log('Client Disconnected');
                socket.disconnect();
                if (isSpeaker(socket)) {
                    speaker = ''
                    title = 'Untitled Presentation'
                    io.emit('end', { speaker, title })
                } else {
                    audience = audience.filter(obj => socket.id != obj.id)
                    emitAudienceUpdated(io)
                }

                
            });

            socket.on('start', (payload) => {
                validateSpeakerPayload(payload)
                speaker = { name: payload.name, id: socket.id, type: 'speaker' }
                title = payload.title
                socket.emit('started', speaker)
                io.sockets.emit('session started', { speakerName: speaker.name, title })
            })


            socket.on('join', (payload) => {
                validateUserPayload(payload)
                const newMember = { id: socket.id, name: payload.name, type: 'audience' }
                audience.push(newMember)
                emitAudienceUpdated(io)
                socket.emit('joined', newMember)
            });
        });
    },
    emit(event) {
        console.log("emitting " + event);
        io.emit(event)
    },
    on(event, callback) {
        io.on(event, callback)
    }

}
function emitAudienceUpdated(io) {
    return io.sockets.emit('audience updated', audience)
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

const isSpeaker = (socket) => {
    return socket.id === speaker.id
}
