const {setup} = require('../helpers/requestsSpecHelper')
let server, request
describe("Coutries endpoint", function () {
	beforeAll(()=>{
		[server, request] = setup()
	})
	afterAll(() => {
		server.close()
	})
	fit("should get countries", function (done) {
		request.get('/countries').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200)
			.end((err, res) => {
				expect(res.body.length).toBeGreaterThanOrEqual(1)
				done();
			})
	});
})