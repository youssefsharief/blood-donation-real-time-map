const express = require('express');
const dbConnection= require('./core/dbConnection.js')
const instatiateMiddleWares = require('./core/middlewares/_instatiationMiddlewares.js')
const http = require('http');
const setViews = require('./core/setViews')
const devOpsHelper = require('./core/devOpsHelper.js')
const socket_io = require('./modules/socket.io.js')
const devOps = require('./core/devOps.js')

dbConnection.connectTodb()

const app = express();
const server = http.createServer(app);
setViews(app)
instatiateMiddleWares(app)
const port = devOpsHelper.normalizePort(process.env.PORT || '3000');
app.set('port', port);
server.listen(port);

devOps.instantiate(server, port)

socket_io(server).instantiate()



module.exports = app;
