const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routesMiddleware = require("../../routes/routesMiddleware")
const errorHandlersMiddleware = require("./errorHandlersMiddleware")

module.exports = function(app) {
    app.use(logger('dev'));
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(cookieParser());
    routesMiddleware(app)
    errorHandlersMiddleware(app)
}



