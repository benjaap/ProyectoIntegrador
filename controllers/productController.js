const productos = require('../db/productos');

const productController = {
    detalle: function(req, res){
        res.render('product', { producto: lista});
    },
    Add: function(req, res){
        res.render('Add', { title:'Agregar Producto' })
    },
    searchResult: function(req,res){
        res.render('searchResult', { title:'Search Result'})
    },
}

module.exports = productController;
