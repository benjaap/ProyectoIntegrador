var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get("/", function(req, res){
    res.send('')
});

router.get('/detalle/:id', productController.detalle);

router.get('/Add', productController.Add);

router.get('/searchresults', productController.searchResult)

module.exports = router;