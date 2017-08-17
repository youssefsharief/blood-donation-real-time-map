let io
let audience = []
let connections = []
let speaker = {}
const groups = ["Philiosophy Debates", "Comedy", "Political Debates"]
module.exports = {
    instantiate(server) {
        io = require('socket.io')(server);
        io.sockets.setMaxListeners(1000)
        io.on('connection', (socket) => {
            connections.push(socket);
            console.log('Client Connected');
            socket.broadcast.emit("new one connected")
            socket.emit('groups', groups)

            socket.once('disconnect', () => {
                connections.splice(connections.indexOf(socket), 1);
                audience = audience.filter(obj => socket.id != obj.id)
                emitAudienceUpdated(io)
                socket.disconnect();
                console.log('Socket.io Disconnected');
            });

            socket.on('speaker join', (payload)=> {
                speaker={name: payload.name, id:socket.id, type: 'speaker'}
                socket.emit('joined', speaker)
            })


            socket.on('join', (payload) => {
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



}//
function emitAudienceUpdated(io) {
    return io.sockets.emit('audience updated', audience)
}


            // socket.on('group selected', (group) => {
            //     socket.join(group)
            //     console.log(socket.id, 'joined', group);
            //     socket.on('send chat message', (payload) => {
            //         io.sockets.in(group).emit('new chat message', payload)
            //         console.log(socket.id, 'joined', group);
            //     });
            // });
