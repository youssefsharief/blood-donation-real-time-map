
const dbConfing= require('../config/dbConfig.js')
const mongoose = require("mongoose")

function connectToOriginalDb(){
    return mongoose.connect(`mongodb://${dbConfing.userName}:${dbConfing.password}@ds163711.mlab.com:63711/temp_database`, { useMongoClient: true});
}
function connectToTestDb(){
    return mongoose.connect(`mongodb://${dbConfing.userName}:${dbConfing.password}@ds163711.mlab.com:63711/temp_database`, { useMongoClient: true});
}
mongoose.connection.on('open', () => console.log('Db connected'))

mongoose.connection.on('error', (error) => {
    throw new Error(error)
})
module.exports  = {connectToOriginalDb, connectToTestDb}
