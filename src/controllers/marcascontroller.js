let db = require('../database/database');

let controller = {

    //todas las marcas
    index: (req, res) => {
        let marcas = db.queryMarcas()
        res.render('marcas', {marcas: marcas} )
    },

    marca: (req, res) => {
        let marca = req.params.marca.toLowerCase()
        let autos = db.queryAutosPorMarca(marca)
        if (autos.length>0) {
            res.render('marcaDeterminada', {autos: autos})
        } else {
            res.send("Error no se encontro nada de nada")
        }
    }
}



module.exports = controller