const app = require('../../src/app')
const auth = require('../../src/core/authentication')
require('jasmine')

describe("Auth module", function () {
    it("should set mobile and admin secrets", function () {
        auth.setSecrets(app, { adminSecret: "123", mobileSecret: "321" })
        expect(app.get('adminSecret')).toBe('123')
        expect(app.get('mobileSecret')).toBe('321')
    });

})