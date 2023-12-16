const fs = require('fs')


module.exports = {
    JSON : (productos) => {
        return JSON.parse(fs.readFileSync(`./src/data/${productos}.json`,'utf-8'))
    },
    mandarJSON : (ruta,productos) => {
        fs.writeFileSync(`./src/data/${ruta}.json`, JSON.stringify(productos,null,3), 'utf-8')
       return null
    }
}