let fs = require('fs') //FILE SYSTEM;


//funciones
let database = JSON.parse(fs.readFileSync('./src/database/concesionarias.json', 'utf-8'))

let queryAllStores = () => database;

let queryStoreWhenNombre = (nombre) =>  database.find(element => element.sucursal.toLowerCase() == nombre.toLowerCase())

let queryAllAutos = () => {
    let inventarioTotal = []
    database.forEach(sucursal => {
        sucursal.autos.forEach(auto => {
            inventarioTotal.push(auto)
        })
    })
    return inventarioTotal;
}

let queryMarcas = () => {
    let setMarcas = new Set()
    queryAllAutos().forEach(auto => setMarcas.add(auto.marca))

    return Array.from(setMarcas)
}

let queryAutosPorMarca = (marca) => {
    let autosFiltrados = [];
    if (queryMarcas().includes(marca)) {
        queryAllAutos().forEach(auto => {
            if (auto.marca == marca) {
                autosFiltrados.push(auto)
            }
        })
    }
    return autosFiltrados
}


let queryAutoWhereEqual = (list, description) =>  list.filter( element => element.anio == description.toLowerCase() || element.color.toLowerCase() == description.toLowerCase() )


/////

module.exports = {
    database: database,
    queryMarcas: queryMarcas,
    queryAllAutos: queryAllAutos,
    queryAutosPorMarca: queryAutosPorMarca,
    queryAutoWhereEqual: queryAutoWhereEqual,
    queryAllStores: queryAllStores,
    queryStoreWhenNombre: queryStoreWhenNombre

}