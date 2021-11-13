let fs = require('fs') //FILE SYSTEM;


//funciones
let database = JSON.parse(fs.readFileSync('./src/database/concesionarias.json', 'utf-8'))

let selectStores = () => database;

let queryAutos = () => {
    let inventarioTotal = []
    database.forEach(sucursal => {
        sucursal.autos.forEach(auto => {
            inventarioTotal.push(auto)
        })
    })
    return inventarioTotal;
}

let queryMarcas = () => {
    let marcas = []
    let marcasFiltrada = []
    queryAutos().forEach(auto => {
        marcas.push(auto.marca)
    })
    marcas.forEach(marca => {
        if (!marcasFiltrada.includes(marca)) {
            marcasFiltrada.push(marca)
        }
    })
    return marcasFiltrada;
}

let queryAutosPorMarca = (marca) => {
    let autosFiltrados = [];
    if (queryMarcas().includes(marca.toLowerCase())) {
        queryAutos().forEach(auto => {
            if (auto.marca == marca) {
                autosFiltrados.push(auto)
            }
        })
    }
    return autosFiltrados
}


let queryWhereEqual = (list, description) => {
    /* let filterList = []
    list.forEach(auto => {
        if (auto.anio == description.toLowerCase() || auto.color.toLowerCase() == description.toLowerCase()) {
            filterList.push(auto)
        }
    })

    return filterList */
    return list.filter( element => element.anio == description.toLowerCase() || element.color.toLowerCase() == description.toLowerCase() )
}

/////

module.exports = {
    database: database,
    queryMarcas: queryMarcas,
    queryAutos: queryAutos,
    queryAutosPorMarca: queryAutosPorMarca,
    queryWhereEqual: queryWhereEqual,
    selectStores: selectStores

}