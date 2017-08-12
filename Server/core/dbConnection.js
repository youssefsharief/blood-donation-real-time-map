
const dbConfing= require('../config/dbConfig.js')
const mongoose = require("mongoose")

function connectTodb(){
    mongoose.connect(`mongodb://${dbConfing.userName}:${dbConfing.password}@ds163711.mlab.com:63711/temp_database`);
    // mongoose.Promise = global.Promise;
}

module.exports = {
    connectTodb : connectTodb
}
