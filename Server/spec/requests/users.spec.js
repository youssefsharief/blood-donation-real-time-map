const faker = require('faker')
const jasmine = require('jasmine')
const specUtility = require('../helpers/specUtility')
describe("UserApi", function () {
	const email = faker.internet.email()
	const password = faker.internet.password(6)
	const newUser = { email, password }
	it("should signup successgully if user is new", function (done) {
		post(newUser).end((err, res) => {
			expect(res.body.email).toEqual(email)
			expect(res.body.password.length).toBeGreaterThan(password.length)
			expect(res.body._id).toBeTruthy()
			done();
		})
	});

	it("should get users and refuse signing up an existing user", function (done) {
		get().end((err, res) => {
			const itemInArray = specUtility.selectRandomFromArray(res.body)
			post(itemInArray).end((err, res) => {
				expect(res.status).toBe(403)
				done();
			})
		})
	})

	it("should delete user", function (done) {
		get().end((err, res) => {
			const itemInArray = specUtility.selectRandomFromArray(res.body)
			deleteByID(itemInArray._id).end((err, res2) => {
				expect(res2.status).toBe(200)
				expect(res2.body.ok).toBe(1)
				done();
			})
		})
	})

	it("should get users", function (done) {
		get().expect(200)
			.end((err, res) => {
				expect(Array.isArray(res.body)).toBe(true)
				const itemInArray = specUtility.selectRandomFromArray(res.body)
				expect(itemInArray.email).toBeDefined()
				expect(itemInArray.password).toBeDefined()
				done();
			})
	})



});

function post(newUser) {
	return global.appRequest.post('/users/signup').set('Accept', 'application/json').expect('Content-Type', /json/).send(newUser)
}
function get() {
	return global.appRequest.get('/users').set('Accept', 'application/json').expect('Content-Type', /json/)
}
function deleteByID(id) {
	return global.appRequest.delete(`/users/${id}`).set('Accept', 'application/json').expect('Content-Type', /json/)
}
