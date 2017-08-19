require('jasmine')
const firstUser = require('socket.io-client')('http://localhost:3000');
const secondUser = require('socket.io-client')('http://localhost:3000');
const speaker = require('socket.io-client')('http://localhost:3000');
const faker = require('faker')
// const rewire = require('rewire')
// const serverSocket = rewire('../../src/modules/serverSocket')

describe("Scoket Events", function () {
    // describe("Disonnection", function () {
    //     it("should reflect on other clients", function (done) {
    //         firstUser.disconnect()
    //         done()
    //     });
    // })

    describe("Joining as a user", function () {
        const name = faker.name.firstName()
        beforeEach(() => {
            firstUser.emit('join', { name })
        })
        it("should join", function (done) {
            firstUser.on('joined', (payload) => {
                done()
            })
        });
        it("when joining should get me my name and socket id", function (done) {
            firstUser.on('joined', (payload) => {
                expect(payload.name).toBe(name)
                expect(payload.id).toBeTruthy()
                done()
            })
        });
        it("audience should get updated to other clients", function (done) {
            secondUser.on('audience updated', (payload) => {
                done()
            })
        });
        it("when joining broadcast to other that new member existed", function (done) {
            secondUser.on('audience updated', (payload) => {
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
                done()
            })
        });
        it("should get notiied that the session started with the title", function (done) {
            speaker.on('session started', (payload) => {
                expect(payload.speakerName).toBe(name)
                expect(payload.title).toBeTruthy(title)
                done()
            })
        });
        it("users should get notified and get speaker's name and the title of presentation", function (done) {
            firstUser.on('session started', (payload) => {
                expect(payload.speakerName).toBe(name)
                expect(payload.title).toBeTruthy(title)
                done()
            })
        }); 
    })
    

})