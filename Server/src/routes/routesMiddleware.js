// const baseUrl = ''
const routes = ['entity', 'countries', 'neighborhoods', 'restaurants', 'users']


function setRoutes(app) {
    routes.forEach(x => {
        app.use(`/${x}`, require(`./${x}/_${x}`))
    })
}
module.exports = setRoutes

