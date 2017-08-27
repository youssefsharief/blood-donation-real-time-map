const utility = require('./utility')

describe("utility", function () {
    it("selectRandomFromArray",  () => {
        expect(typeof utility.selectRandomFromArray([1, 2, 3, 4])).toBe('number')
    });
    describe("Promiser", function () {
        let fn1, fn2, result
        beforeAll(()=>{
            fn1 = x => 2*x
            fn2 = x => -100*x 
        })
        it("should resolve data when no error is present",  () => {
            result = utility.promiser(fn1, fn2)(null,5)
            expect(result).toBe(10)
        });
        it("should resolve data when no error is present",  () => {
            result = utility.promiser(fn1, fn2)(5)
            expect(result).toBe(-500)
        });
        
    })
})