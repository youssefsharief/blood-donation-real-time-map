const { setup } = require('./helpers/requestsSpecHelper')
const faker = require('faker')
let server, request
describe("Donors endpoint", function () {
	beforeAll(() => {
		[server, request] = setup()
	})
	afterAll(() => {
		server.close()
	})
	describe("Deleting donor", function () {
		const newDonor = {
			firstName: faker.name.firstName(),
			lastName: faker.name.lastName(),
			email: faker.internet.email(),
			telephone: faker.phone.phoneNumber(),
			bloodGroup: "O",
			longitude:faker.address.longitude(),
			latitude: faker.address.latitude(),
			address: faker.address.streetAddress()
		}
		let id
		beforeEach((done)=>{
			request.post('/donors').send(newDonor).end((err, res) => {
				id=res.body._id
				done()
			})
		})

		it("should delete successfully ", function (done) {
			request.delete('/donors/'+ id).end((err, res) => {
                expect(res.status).toEqual(200)
				done();
			})
        })
        it("should respond by 404 error when id is not provided ", function (done) {
			request.delete('/donors/').end((err, res) => {
                expect(res.status).toEqual(404)
				done();
			})
        })
        it("should respond by error when id is wrong ", function (done) {
			request.delete('/donors/'+ 53).end((err, res) => {
				console.log(res.body);
				
                expect(res.status).toEqual(400)
				done();
			})
        })
    })
})