require('jasmine')
const rewire = require('rewire')
const serverSocket = rewire('./serverSocket')
const faker = require('faker')
let app, server, socket_io, firstUser, secondUser, speaker
// const rewire = require('rewire')
// const serverSocket = rewire('../../src/modules/serverSocket')

describe("Scoket Events", function () {
    // describe("Disonnection", function () {
    //     it("should reflect on other clients", function (done) {
    //         firstUser.disconnect()
    //         done()
    //     });
    // })
    beforeAll(() => {
        app = require('../app')
        server = app.listen(5000)
        socket_io = require('./serverSocket.js')
        socket_io.instantiate(server)
        firstUser = require('socket.io-client')('http://localhost:5000');
        secondUser = require('socket.io-client')('http://localhost:5000');
        speaker = require('socket.io-client')('http://localhost:5000');
    })
    afterAll(() => {
        firstUser.disconnect()
        secondUser.disconnect()
        speaker.disconnect()
        server.close()
    })

    fdescribe("Connections", ()=>{
        it("should increase when a new socket is connected", function (done) {
            done()
            
        });
    })
    describe("Joining as a user", function () {
        const name = faker.name.firstName()
        beforeEach(() => {
            firstUser.emit('join', { name })
            firstUser.emit('join', { name:"Youssef" })
        })
        fit("should be accepted", function (done) {
            firstUser.on('joined', () => {
                done()
            })
        });
        it("should get my name and socket id in payload", function (done) {
            firstUser.on('joined', (payload) => {
                expect(payload.name).toBe(name)
                expect(payload.id).toBeTruthy()
                done()
            })
        });
        fit("should broadcast to other that new member existed", function (done) {
            secondUser.on('audience updated', () => {
                done()
            })
        });
        fit("should broadcast to other the new list of members", function (done) {
            secondUser.on('audience updated', (payload) => {
                expect(Array.isArray(payload)).toBeTruthy()
                global.log.warn(payload);
                
                done()
            })
        });
    })

    describe("Joining as a speaker", function () {
        const name = faker.name.firstName()
        const title = faker.lorem.word()
        beforeEach(() => {
            speaker.emit('start', { name, title })
        })
        it("speaker should get permitted and get his socket id", function (done) {
            speaker.on('started', (payload) => {
                expect(payload.name).toBe(name)
                expect(payload.id).toBeTruthy()
                expect(payload.title).toBe(title)
                expect(payload.type).toBe('speaker')
                done()
            })
        });
        describe('Audience', () => {
            it("should get notiied by 'session started' event", function (done) {
                speaker.on('session started', () => {
                    done()
                })
            });

            it("should get payload that includes speakerName and title", function (done) {
                speaker.on('session started', (payload) => {
                    expect(payload.speakerName).toBe(name)
                    expect(payload.title).toBeTruthy(title)
                    done()
                })
            });
        })
    })



    describe("Leaving as a speaker, audience", function () {
        beforeAll((done) => {
            firstUser.emit('join', { name:"Ahmed" })
            speaker.emit('start', { name:"Essam", title:"Title 1" })
            done()
        })

        it("should get notified with 'end' event ", function (done) {
            firstUser.on('end', () => {
                done()
            })
        });
    })



    // describe("Leaving as an audience member", function () {
    //     beforeEach(() => {
    //         secondUser.disconnect()
    //     })
    //     describe("Audience", function () {
    //         it("should get notified with 'audience updated' event ", function (done) {
    //             firstUser.on('audience updated', () => {
    //                 done()
    //             })
    //         })
    //         it("should new audience in payload ", function (done) {
    //             secondUser.on('audience updated', (payload) => {
    //                 expect(Array.isArray(payload)).toBeTruthy()
    //                 expect(payload.length).toBe(1)
    //                 done()
    //             })
    //         });
    //     })
    // })
})