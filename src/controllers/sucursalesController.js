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
        let sucursales = db.queryAllStores()
        res.render('concesionarias', {sucursales: sucursales})
    }
    ,
    getOneStore: (req, res) => {
        let sucursal = db.queryStoreWhenNombre(req.params.sucursal)
        let autos = sucursal.autos
        res.render('unaSucursal', {sucursal: sucursal, autos: autos})
    }

}

module.exports = controller;