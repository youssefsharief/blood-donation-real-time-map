const joi = require('joi')
const socketUtility = require('./socketUtiltiy')
const speakerSocket = require('./speaker.socket')
let io

module.exports = {
    instantiate(server) {
        io = require('socket.io')(server);
        io.sockets.setMaxListeners(1000)
        speakerSocket.instantiate(io)
    }
}