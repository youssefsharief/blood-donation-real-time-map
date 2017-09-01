const { setup } = require('../../helpers/requestsSpecHelper')
const faker = require('faker')
let server, request
describe("R endpoint", function () {
	beforeAll(() => {
		[server, request] = setup()
	})
	afterAll(() => {
		server.close()
	})
	describe("Adding donor", function () {
		const newDonor = {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email(),
			telephone: faker.phone.phoneNumber(),
			bloodGroup: "O",
			location: [faker.address.longitude(), faker.address.latitude()],
		}

		it("should add donor", function (done) {
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(200)
				done();
			})
		})

	})

	describe("get donors by location api", function () {

		it("should get donors by location if query is correct", function (done) {
			request.get('/donors/?long=-73.9928&lat=40.893&distance=50000000').expect(200)
				.end((err, res) => {
					expect(Array.isArray(res.body)).toEqual(true)
					done();
				})
		});
		it("should return 400 in case of error", function (done) {
			request.get('/donors/?long=-73.9928&lat=40.893&disance=50000000').end((err, res) => {
				global.log.warn(res.body);
				expect(res.status).toEqual(400)
				done();
			})
		})


	})


	describe("get donor info by id", function () {
		it("should get donor info if id exists", function (done) {
			request.get('/donors/59a940c120262515a8d59b8f').expect(200)
				.end((err, res) => {
					expect(res.body.firstName).toBeTruthy()
					done();
				})
		});
		it("should return 400 in case of error", function (done) {
			request.get('/donors/fd').end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
	})


	describe("update donor", function () {
		fit("should get donor info if id exists", function (done) {
			request.get('/donors/?long=-73.9928&lat=40.893&distance=50000000').end((err, res) => {
				const _id = res.body[0]._id
				const updatedDonor = {
					firstName: faker.name.firstName(),
					lastName: faker.name.lastName(),
					email: faker.internet.email(),
					telephone: faker.phone.phoneNumber(),
					bloodGroup: "O",
					_id: _id
					// location: [faker.address.longitude(), faker.address.latitude()],
				}
				global.log.warn(updatedDonor);

				request.put('/donors').expect(200).send(updatedDonor)
					.end((err, res) => {
						expect(res.body.firstName).toBeTruthy()
						done();
					})
			});
		})
		it("should return 400 in case of error", function (done) {
			request.get('/donors/fd').end((err, res) => {
				expect(res.status).toEqual(400)
				done();
			})
		})
	})



})