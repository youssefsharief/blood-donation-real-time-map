const jwtConfig = require("../config/jwtConfig")



module.exports = {
    setSecrets(app) {
        app.set('adminSecret', jwtConfig.adminSecret);
        app.set('mobileSecret', jwtConfig.mobileSecret);
    }
};