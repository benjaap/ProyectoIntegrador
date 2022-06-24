var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get('/detalle/:id?', productController.show);
router.get('/search', productController.search);
router.get('/store', productController.store);
router.get('/add', productController.add);


module.exports = router;

