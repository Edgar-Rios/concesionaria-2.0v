let db = require('../database/database')


let controller = {
    getStores: (req, res) => {
        /* res.set({'content-type':'text/plain;charset=utf-8'})
        res.write(`
        ****************************
        ----Nuestras sucursales:----
        ****************************
        Empresa lider en el mercado.

        ____________________________

        `)
        db.forEach(sucursal => {
            res.write(`
                ${sucursal.sucursal}
                Telefono: ${sucursal.telefono}
                Direccion: ${sucursal.direccion}
            `)
        })
        res.end(); */
        let sucursales = db.selectStores()
        console.log(sucursales)
        res.render('concesionarias', {sucursales: sucursales})
    }
    ,
    getOneStore: (req, res) => {

    }

}

module.exports = controller;