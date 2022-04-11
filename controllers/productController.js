const productController = {
    detalle: function(req, res){
        res.render('index', { title:'Producto Detalle' })
    }
}

module.exports = productController;
