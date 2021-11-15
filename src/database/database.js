let fs = require('fs') //FILE SYSTEM;


//funciones
let database = JSON.parse(fs.readFileSync('./src/database/concesionarias.json', 'utf-8'))

// consulta todos las sucursales
let queryAllStores = () => database;

//consulta una sucursal por nombre
let queryStoreWhenNombre = (nombre) =>  database.find(element => element.sucursal.toLowerCase() == nombre.toLowerCase())

//consulta todos los autos
let queryAllAutos = () => {
    let inventarioTotal = []
    database.forEach(sucursal => {
        sucursal.autos.forEach(auto => {
            inventarioTotal.push(auto)
        })
    })
    return inventarioTotal;
}

//consulta todas las marcas
let queryMarcas = () => {
    let setMarcas = new Set()
    queryAllAutos().forEach(auto => setMarcas.add(auto.marca))

    return Array.from(setMarcas)
}

//consulta los autos de una marca
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

//consulta los autos donde tenga la descripcion pedida
let queryAutoWhereEqual = (list, description) =>  list.filter( element => element.anio == description.toLowerCase() || element.color.toLowerCase() == description.toLowerCase() )

let queryAllYearsfromAutos = () => {
    let mySet = new Set()
    queryAllAutos().forEach(auto => mySet.add(auto.anio));
    return Array.from(mySet)
}
let queryAllColorsfromAutos = () => {
    let mySet = new Set()
    queryAllAutos().forEach(auto => mySet.add(auto.color));
    return Array.from(mySet)
}
let queryAllModelsfromAutos = () => {
    let mySet = new Set()
    queryAllAutos().forEach(auto => mySet.add(auto.modelo));
    return Array.from(mySet)
}
/////

module.exports = {
    database: database,
    queryMarcas: queryMarcas,
    queryAllAutos: queryAllAutos,
    queryAutosPorMarca: queryAutosPorMarca,
    queryAutoWhereEqual: queryAutoWhereEqual,
    queryAllStores: queryAllStores,
    queryStoreWhenNombre: queryStoreWhenNombre,
    queryAllYearsfromAutos: queryAllYearsfromAutos,
    queryAllColorsfromAutos: queryAllColorsfromAutos,
    queryAllModelsfromAutos: queryAllModelsfromAutos

}