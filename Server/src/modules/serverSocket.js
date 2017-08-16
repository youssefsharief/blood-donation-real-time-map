let io
module.exports = {
    instantiate (server) {
        console.log('instatiating socket.io');
        io = require('socket.io')(server);
        io.on('connection', () => {
            console.log('CCCCCCCCCCC');
            
            io.on('disconnect', () => {
                console.log('disconnected');
            });
        });
    },
    emit(event){
        console.log("emitting " + event);
        
        io.emit(event)
    }

    

}//

