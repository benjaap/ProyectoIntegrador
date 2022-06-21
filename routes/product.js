var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get('/detalle/:id', productController.show);//REVISAR
router.get('/list', productController.list);//REVISAR
router.get('/store', productController.store)//REVISAR


module.exports = router;

