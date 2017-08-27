const { setup } = require('../../helpers/requestsSpecHelper')
let server, request
describe("R endpoint", function () {
	beforeAll(() => {
		[server, request] = setup()
	})
	afterAll(() => {
		server.close()
	})
	describe("get restaurants by neighborhood", function () {
		fit("should get restaurants by neighborhood", function (done) {
			request.get('/restaurants/by_neighborhood/?long=-73.9928&lat=40.7193').set('Accept', 'application/json')
				.expect('Content-Type', /json/).expect(200)
				.end((err, res) => {
					global.log.warn(res.body);
					
					expect(res.body.length).toBeGreaterThanOrEqual(1)
					done();
				})
		});


		fit("should respond to error when error ocuurrs while trying to retrieve neighborhood", function (done) {
			request.get('/restaurants/by_neighborhood').set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					global.log.warn(res.body);
					done()
				})
		});



		it("should respond to error when error ocuurrs while trying to retrieve restaurants after getting neighborhood", function (done) {
			request.get('/restaurants/by_neighborhood/?long=-73.9928&lat=40.7193').set('Accept', 'application/json')
				.expect('Content-Type', /json/)
				.end((err, res) => {
					done()
				})
		});


	})
	describe("get restaurants by location api", function () {

		it("should get restaurants by location if query is correct", function (done) {
			request.get('/restaurants/by_location/?long=-73.9928&lat=40.893&distance=5000').expect(200)
				.end((err, res) => {
					expect(Array.isArray(res.body)).toEqual(true)
					done();
				})
		});
		it("should return 422 in case of error", function (done) {
			request.get('/restaurants/by_location/?long=-73.9928&lat=40.893&distace=5000').end((err, res) => {
				global.log.warn(res.body);
				expect(res.status).toEqual(400)
				done();
			})
		})
		it("should throw error if query is wrong", function () {
			request.get('/restaurants/by_location/?long=string&lat=40.893&distance=5000').expect(400)
			// .end((err, res) => {
			// 	expect(res.status).toBe(400)
			// 	done();
			// })
		});


	})


	describe("Adding restaurant", function () {
		it("should add restaurant", function (done) {
			request.post('/restaurants').send({
				name: "Buffalo Burger",
				location: {
					coordinates: [45, 40],
					type: 'Point'
				}
			}).end((err, res) => {
				expect(res.status).toEqual(200)
				done();
			})
		})
		fit("should return 400 in case of error", function (done) {
			request.get('/restaurants/by_location/?long=-73.9928&lat=40.893&distace=5000').end((err, res) => {
				request.post('/restaurants').send({
					name: "Buffalo Burger",
					location: {
						coordinates: [45, 40],
						type: 'Pint'
					}
				}).end((err, res) => {
					expect(res.status).toEqual(400)
					done();
				})
			})
		})
	})
})