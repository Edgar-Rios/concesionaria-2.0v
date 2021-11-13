let express = require('express');
const router = express.Router();

const controller = require('../controllers/sucursalesController');

router.get('/', controller.getStores)

router.get('/:sucursal', controller.getOneStore)

module.exports = router;