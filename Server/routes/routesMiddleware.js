module.exports = function setRoutes(app) {
    app.use('/entity', require('./entity/entity'));
    app.use('/countries', require('./countries/countries'));
    app.use('/neighborhoods', require('./neighborhoods/neighborhoodRoute'));
    app.use('/restaurants', require('./restaurants/_restaurants'));
}