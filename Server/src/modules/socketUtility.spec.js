require('jasmine')
const socketUtility = require('./socket.utility')

describe("Filter Users and Identify Type", function () {
    let users
    beforeAll(() => {
    })
    afterAll(() => {
    })
    beforeEach(()=>{
        users = [{name:"Youssef", id:"1", type:'speaker'}, {name:"Ahmed", id:"2", type:'audience'}]
    })
    it("should return filtered array and identify removed user type", function () {
        const socket = {id:"1"}
        const result = socketUtility.filterUsersAndIdentifyType(users, socket)
        expect(result).toEqual([[{name:"Ahmed", id:"2", type:'audience'}], 'speaker'])
    });
    it("should return filtered array and identify removed user type", function () {
        const socket = {id:"2"}
        const result = socketUtility.filterUsersAndIdentifyType(users, socket)
        expect(result).toEqual([[{name:"Youssef", id:"1", type:'speaker'}], 'audience'])
    });

})