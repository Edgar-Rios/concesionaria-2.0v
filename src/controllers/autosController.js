let db = require('../database/database')

let controller = {

    autos: (req, res) => {
        res.send(db.queryAutos())
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