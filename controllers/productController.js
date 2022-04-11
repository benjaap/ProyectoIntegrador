const productos = require('../db/productos')

const productController = {
    detalle: function(req, res){
        res.render('product', { producto: "un producto"})
    },
    Add: function(req, res){
        res.render('Add', { title:'Agregar Producto' })
    }
}

module.exports = productController;
