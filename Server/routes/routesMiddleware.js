module.exports = function setRoutes(app) {
    app.use('/entity', require('./entity/entity'));
    app.use('/countries', require('./countries/countries'));
}