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
			firstName : faker.name.firstName(),
			lastName : faker.name.lastName(),
			email : faker.internet.email(),
			telephone : faker.phone.phoneNumber(),
			bloodGroup : "O",
			ip : faker.internet.ip(),
			location: {
				coordinates: [faker.address.longitude(), faker.address.latitude()],
				type: 'Point'
			}
		}
		
		fit("should add donor", function (done) {
			request.post('/donors').send(newDonor).end((err, res) => {
				expect(res.status).toEqual(200)
				done();
			})
		})

	})

	describe("get donors by location api", function () {

		fit("should get donors by location if query is correct", function (done) {
			request.get('/donors/?long=-73.9928&lat=40.893&distance=50000000').expect(200)
				.end((err, res) => {
					expect(Array.isArray(res.body)).toEqual(true)
					done();
				})
		});
		fit("should return 400 in case of error", function (done) {
			request.get('/donors/?long=-73.9928&lat=40.893&disance=50000000').end((err, res) => {
				global.log.warn(res.body);
				expect(res.status).toEqual(400)
				done();
			})
		})


	})



})