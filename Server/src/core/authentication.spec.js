const app = require('../../src/app')
require('jasmine')
const auth = require("./authentication.js");

describe("Auth module", function () {
    it("should set mobile and admin secrets", function () {
        auth.setSecrets(app, { adminSecret: "123", mobileSecret: "321" })
        expect(app.get('adminSecret')).toBe('123')
        expect(app.get('mobileSecret')).toBe('321')
    });


    describe("Get Token From Request", function () {
        it("should get token if request object is set", function () {
            const req = {
                headers: {
                    authorization: "Bearer klug89"
                }
            }
            expect(auth.getTokenFromRequest(req)).toBe('klug89')

        });

        it("should return false if headers are not set", function () {
            const req = {
                headers: {}
            }
            expect(auth.getTokenFromRequest(req)).toBe(false)
        });

        it("should return false if there is no headers field", function () {
            const req = {}
            expect(auth.getTokenFromRequest(req)).toBe(false)
        });

    })

})