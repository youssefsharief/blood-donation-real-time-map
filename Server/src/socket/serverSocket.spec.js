// require('jasmine')
// const faker = require('faker')
// let app, server, socket_io, firstUser, secondUser, speaker


// describe("Scoket Events", function () {
//     beforeAll(() => {
//         app = require('../app')
//         server = app.listen(5000)
//         socket_io = require('./socket.bootstrap.js')
//         socket_io.instantiate(server)
//         firstUser = require('socket.io-client')('http://localhost:5000');
//         secondUser = require('socket.io-client')('http://localhost:5000');
//     })
//     afterAll(() => {
//         firstUser.disconnect()
//         secondUser.disconnect()
//         server.close()
//     })

    
//     describe("needs data event from client", function () {
//         beforeEach(() => {
//             firstUser.emit('needs data', { longitude:30, latitue:30 })
//         })
//         fit("'new data' event should be emitted", function (done) {
//             firstUser.on('new data', () => {
//                 done()
//             })
            
//         });
//         it("should get payload", function (done) {
//             firstUser.on('new data', (payload) => {
//                 global.log.warn(payload);
                
//                 expect(payload).toBeTruthy()
//                 done()
//             })
//         });
//         it("should get array", function (done) {
//             firstUser.on('new data', (payload) => {
//                 expect(Array.isArray(payload)).toBeTruthy()
//                 done()
//             })
//         });
//         it("should get points", function (done) {
//             firstUser.on('new data', (payload) => {
//                 expect(payload).toBeTruthy()
//                 done()
//             })
//         });
//         it("should get longitude and latitude", function (done) {
//             firstUser.on('new data', (payload) => {
//                 expect(payload).toBeTruthy()
//                 done()
//             })
//         });


//     })

// })