const app = require('../app')
const db = require('../core/dbConnection.js')
const request = require('supertest')


function setup() {
    db.connectToTestDb()
    return [app.listen(6000), request(app)]
}

module.exports = {
    setup
}