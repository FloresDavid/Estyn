const fs = require('fs')

module.exports = {
    JSON : (productos) => {
        return JSON.parse(fs.readFileSync(`./src/data/${productos}.json`,'utf-8'))
    }
}