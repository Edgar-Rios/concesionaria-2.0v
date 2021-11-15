let db = require('../database/database')

let controller = {

    autos: (req, res) => {
        let marcas = db.queryMarcas()
        let modelos = db.queryAllModelsfromAutos()
        let colores = db.queryAllColorsfromAutos()
        let anios = db.queryAllYearsfromAutos()
        let autos = db.queryAllAutos()
        res.render('inventarioAutos', {marcas: marcas, modelos: modelos, colores: colores, anios: anios, autos: autos})
    }
    ,
    autosFiltrados: (req, res) => {
        let marca = req.params.marca
        let dato = req.params.dato

        if (db.queryMarcas().includes(marca.toLowerCase())) {
            let autosFiltrados = db.queryAutosPorMarca(marca)
            if (autosFiltrados.length > 0) {
                if (dato) {
                    autosFiltrados = db.queryAutoWhereEqual(autosFiltrados, dato)
                    if (autosFiltrados.length > 0) {
                        res.send(autosFiltrados)
                    }else{
                        res.send(`no encontramos autos de la marca ${marca} con caracteristicas: ${dato}`)
                    }
                } else {
                    res.send(autosFiltrados)
                }
            } else {
                res.send(`en este momento no contamos con Stock de ${marca}`)
            }
            console.log(autosFiltrados)
            console.log(dato)

        } else {
            res.send('ERROR la marca no existe')
        }

    }
}

module.exports = controller;