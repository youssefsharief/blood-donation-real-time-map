function filterUsersAndIdentifyType (users, socket) {
    let type
    users = users.filter((user) => {
        if (socket.id === user.id) { 
            type=user.type
            return false
         }
        else return true
    })
    return [users, type]
}


// function getAudienceInRoom (roomName, io){
//     const x = io.sockets.adapter.rooms[roomName].sockets
//     let  y = []
//     Object.keys(io.sockets.clients()).forEach(id1=>{
//         Object.keys(x).forEach(id2=>{
//             if (id1==id2 && !io.sockets.clients()[id1]._title) y.push(io.sockets.clients()[id1]._name)
//         })
//     })
//     global.log.warn(y);
    
//     return y
// }
module.exports = {
    filterUsersAndIdentifyType, getAudienceInRoom
}