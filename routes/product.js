var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get('/detalle/:id?', productController.show);//REVISAR
router.get('/search', productController.search);//REVISAR
router.get('/store', productController.store);//REVISAR
router.get('/add', productController.add);


module.exports = router;

