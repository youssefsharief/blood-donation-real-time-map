const specUtility = require('../helpers/specUtility')

describe("specUtility", function () {

    it("selectRandomFromArray",  () => {
        expect(typeof specUtility.selectRandomFromArray([1, 2, 3, 4])).toBe('number')
    });
})