module.exports = function (server) {
    return {
        instantiate: function () {
            const io = require('socket.io')(server);
            global.io = io;
            io.on('connection', (socket) => {
                socket.on('room', function (room) {
                    socket.join(room);
                    console.log(room)
                });
                console.log('a user connected');
                socket.on('disconnect', () => {
                    console.log('user disconnected');
                });
                socket.on('reservation', function () {
                    console.log('reservation')
                })

            });

        }
    }


}

