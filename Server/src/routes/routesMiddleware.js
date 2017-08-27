// const baseUrl = ''
const routes = ['neighborhoods', 'restaurants', 'users']


function setRoutes(app) {
    routes.forEach(x => {
        app.use(`/${x}`, require(`./${x}/${x}.router`))
    })
}
module.exports = setRoutes

