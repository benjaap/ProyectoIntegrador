const productos = require('../db/productos')

const productController = {
    detalle: function(req, res){
        let datosProductos = 'Audi TT';
        res.render('product', { producto: "datosProductos"})
    },
    Add: function(req, res){
        res.render('Add', { title:'Agregar Producto' })
    },
    searchResult: function(req,res){
        res.render('searchResults', { title:'Search Result'})
    }
}

module.exports = productController;
