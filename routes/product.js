var express = require('express');
const productController = require('../controllers/productController');
var router = express.Router();

router.get("/", function(req, res){
    res.send('')
});

router.get("/:id", productController.detalle);

module.exports = router;