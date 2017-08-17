const express = require('express');
const path = require('path');
const dbConnection = require('./core/dbConnection.js')
const instatiateMiddleWares = require('./core/middlewares/_instatiationMiddlewares.js')
const http = require('http');
const devOpsHelper = require('./core/devOpsHelper.js')
const socket_io = require('./modules/serverSocket.js')
const devOps = require('./core/devOps.js')
const authentication = require('./core/authentication')
const app = express();
const server = http.createServer(app);
const port = devOpsHelper.normalizePort(process.env.PORT || '3000');

dbConnection()

authentication.setSecrets(app)

setViews(app)
instatiateMiddleWares(app)
app.set('port', port);
server.listen(port);

devOps.instantiate(server, port)

socket_io.instantiate(server)

module.exports = app;

function setViews(app) {
    app.set('views', path.join(__dirname, 'views'));
    app.set('view engine', 'jade');
}
