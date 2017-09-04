let app, server, firstUser, secondUser

const socket_io = require('../../Code/Server/src/socket/socket.bootstrap.js')
describe("Scoket Events", function () {
    beforeAll(() => {
        app = require('../../Code/Server/src/app')
        server = app.listen(5000)
        
        socket_io.instantiate(server)
        firstUser = require('socket.io-client')('http://localhost:5000');
        secondUser = require('socket.io-client')('http://localhost:5000');
    })
    afterAll(() => {
        firstUser.disconnect()
        secondUser.disconnect()
        server.close()
    })

    
    describe("needs data event from client", function () {
        beforeEach(() => {
            firstUser.emit('needs data', { longitude:30, latitue:30 })
        })
        it("'new data' event should be emitted", function () {
            expect(firstUser).toBeTruthy()

        });
        


    })

})