import { globalValidators } from '../../Code/Client/src/app/shared/global-validators';

describe('Global Validators', () => {

const control = { value: "ahmed"}
    it("should check mail validity", () => {
        expect(globalValidators.mailFormat({value: "ahmed"})).not.toBe(null)
        expect(globalValidators.mailFormat({value: "ahmed@gmail"})).toBe(null)
    })






    it("should telephone validity", () => {
        expect(globalValidators.telephoneFormat({value: "5656989745"})).not.toBe(null)
        expect(globalValidators.telephoneFormat({value: "+201111060612"})).toBe(null)
    })
});


