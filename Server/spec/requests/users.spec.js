const faker = require('faker')
const utility = require('../helpers/utility')


const {setup} = require('../helpers/requestsSpecHelper')
let server, request
	


describe("UserApi", function () {
	beforeAll(()=>{
		[server, request] = setup()
	})
	afterAll(() => {
		server.close()
	})
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
			const itemInArray = utility.selectRandomFromArray(res.body)
			post(itemInArray).end((err, res) => {
				expect(res.status).toBe(403)
				done();
			})
		})
	})

	it("should delete user", function (done) {
		get().end((err, res) => {
			const itemInArray = utility.selectRandomFromArray(res.body)
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
				const itemInArray = utility.selectRandomFromArray(res.body)
				expect(itemInArray.email).toBeDefined()
				expect(itemInArray.password).toBeDefined()
				done();
			})
	})



});

function post(newUser) {
	return request.post('/users/signup').set('Accept', 'application/json').expect('Content-Type', /json/).send(newUser)
}
function get() {
	return request.get('/users').set('Accept', 'application/json').expect('Content-Type', /json/)
}
function deleteByID(id) {
	return request.delete(`/users/${id}`).set('Accept', 'application/json').expect('Content-Type', /json/)
}
