const express = require('express');
const path = require('path');
const morganLogger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const routesMiddleware = require("./routes/routesMiddleware")
const errorHandlersMiddleware = require("./core/errorHandlersMiddleware")
const winstonLogger = require('./core/logger')
const cors = require('cors')

const app = express();
winstonLogger.configure()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(morganLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors())
routesMiddleware(app)
errorHandlersMiddleware(app)

module.exports = app;

