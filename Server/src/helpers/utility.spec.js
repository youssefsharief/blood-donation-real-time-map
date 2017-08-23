const utility = require('./utility')

describe("utility", function () {
    it("selectRandomFromArray",  () => {
        expect(typeof utility.selectRandomFromArray([1, 2, 3, 4])).toBe('number')
    });
})