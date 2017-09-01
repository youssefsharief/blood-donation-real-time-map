// const baseUrl = ''
const routes = ['neighborhoods', 'restaurants', 'donors']


function setRoutes(app) {
    routes.forEach(x => {
        app.use(`/${x}`, require(`./${x}/${x}.router`))
    })
}
module.exports = setRoutes

