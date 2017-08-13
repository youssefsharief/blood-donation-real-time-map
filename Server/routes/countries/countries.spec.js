describe("Countries endpoint", function () {

	it("should get countries", function (done) {
		global.appRequest.get('/countries').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200)
			.end((err, res) => {
				expect(res.body.length).toBeGreaterThanOrEqual(1)
				done();
			})
    });
})