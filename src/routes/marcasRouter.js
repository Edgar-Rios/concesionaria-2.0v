let router = require('express').Router()       
let controller = require('../controllers/marcasController');


router.get('/', controller.index)
router.get('/:marca', controller.marca)


module.exports = router;