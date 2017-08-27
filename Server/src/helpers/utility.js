const selectRandomFromArray = (arr) => arr[Math.floor(Math.random() * arr.length)];
const promiser = (resolve, reject) => (err, data) => {
    if (err) {
        reject(err)
    }
    resolve(data)
}

const badRequest = (res, item) => {
    return res.status(400).json(`An Error occurred while trying ${item}`)
}

module.exports = {
    selectRandomFromArray, promiser, badRequest
}