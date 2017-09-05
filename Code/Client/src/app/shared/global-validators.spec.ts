import { globalValidators } from './global-validators';

describe('Global Validators', () => {

    const control = { value: "ahmed" }
    fit("should check mail validity", () => {
        expect(globalValidators.mailFormat({ value: "ahmed" })).not.toBe(null)
        expect(globalValidators.mailFormat({ value: "ahmed@gmail" })).toBe(null)
    })


    fit("should check telephone validity", () => {
        expect(globalValidators.telephoneFormat({ value: "5656989745" })).not.toBe(null)
        expect(globalValidators.telephoneFormat({ value: "+201111060612" })).toBe(null)
        expect(globalValidators.telephoneFormat({ value: "00201111060612" })).toBe(null)
        expect(globalValidators.telephoneFormat({ value: "0201111060612" })).not.toBe(null)
    })

    describe('Location validation', () => {

        describe('Longitude', () => {
            fit("should not accept above range", () => {
                expect(globalValidators.longitudeFormat({ value: 181 })).not.toBe(null)
            })
            fit("should not accept below range", () => {
                expect(globalValidators.longitudeFormat({ value: -181 })).not.toBe(null)
            })
            fit("should accept within range", () => {
                expect(globalValidators.longitudeFormat({ value: 89 })).toBe(null)
                expect(globalValidators.longitudeFormat({ value: -89 })).toBe(null)
                expect(globalValidators.longitudeFormat({ value: 0 })).toBe(null)
                expect(globalValidators.longitudeFormat({ value: 10 })).toBe(null)
            })
            fit("should accept ranges not acceptable by latitude", () => {
                expect(globalValidators.longitudeFormat({ value: 105 })).toBe(null)
                expect(globalValidators.longitudeFormat({ value: -150 })).toBe(null)
            })
        })
        describe('Latitude', () => {
            fit("should not accept above range", () => {
                expect(globalValidators.latitudeFormat({ value: 91 })).not.toBe(null)
            })
            fit("should not accept below range", () => {
                expect(globalValidators.latitudeFormat({ value: -91 })).not.toBe(null)
            })
            fit("should accept within range", () => {
                expect(globalValidators.latitudeFormat({ value: 89 })).toBe(null)
                expect(globalValidators.latitudeFormat({ value: -89 })).toBe(null)
                expect(globalValidators.latitudeFormat({ value: 0 })).toBe(null)
                expect(globalValidators.latitudeFormat({ value: 10 })).toBe(null)
            })

            




        })
    })
});


