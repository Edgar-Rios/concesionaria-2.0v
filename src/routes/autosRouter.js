let router = require('express').Router()
let controller = require('../controllers/autosController')


router.get('/', controller.autos)

router.get('/:marca/:dato?', controller.autosFiltrados)


module.exports = router

