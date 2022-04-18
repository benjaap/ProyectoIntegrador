var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get('/detalle', productController.detalle);

router.get('/Add', productController.Add);

router.get('/searchesult', productController.searchResult);

module.exports = router;

