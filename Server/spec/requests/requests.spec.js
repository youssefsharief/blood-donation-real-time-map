const {setup} = require('../helpers/requestsSpecHelper')
let server, request
describe("R endpoint", function () {
	beforeAll(()=>{
		[server, request] = setup()
	})
	afterAll(() => {
		server.close()
	})
	fit("should get restaurants by neighborhood", function (done) {
		request.get('/restaurants/by_neighborhood/?long=-73.9928&lat=40.7193').set('Accept', 'application/json').expect('Content-Type', /json/).expect(200)
			.end((err, res) => {
				expect(res.body.length).toBeGreaterThanOrEqual(1)
				done();
			})
	});

	describe("get restaurants by location api", function () {

		it("should get restaurants by location if query is correct", function (done) {
			request.get('/restaurants/by_location/?long=-73.9928&lat=40.893&distance=5000').expect(200)
				.end((err, res) => {
					expect(Array.isArray(res.body)).toEqual(true)
					done();
				})
		});
		it("should return 422 in case of error", function (done) {
			request.get('/restaurants/by_location/?long=-73.9928&lat=40.893&distace=5000').expect(400)
				.end((err, res) => {
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


	// describe("when song has been paused", function() {
	//   beforeEach(function() {
	//     player.play(song);
	//     player.pause();
	//   });

	//   it("should indicate that the song is currently paused", function() {
	//     expect(player.isPlaying).toBeFalsy();

	//     // demonstrates use of 'not' with a custom matcher
	//     expect(player).not.toBePlaying(song);
	//   });

	//   it("should be possible to resume", function() {
	//     player.resume();
	//     expect(player.isPlaying).toBeTruthy();
	//     expect(player.currentlyPlayingSong).toEqual(song);
	//   });
	// });

	// // demonstrates use of spies to intercept and test method calls
	// it("tells the current song if the user has made it a favorite", function() {
	//   spyOn(song, 'persistFavoriteStatus');

	//   player.play(song);
	//   player.makeFavorite();

	//   expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
	// });

	// //demonstrates use of expected exceptions
	// describe("#resume", function() {
	//   it("should throw an exception if song is already playing", function() {
	//     player.play(song);

	//     expect(function() {
	//       player.resume();
	//     }).toThrowError("song is already playing");
	//   });
	// });
});
