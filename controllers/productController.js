const data2 = require('../db/comentarios');
const data = require('../db/productos');

const productController = {
    detalle: function(req, res){
        console.log('DATA', data)
        res.render('product', {comentario:data2, productos:data });
    },
    Add: function(req, res){
        res.render('Add', { title:'Agregar Producto' })
    },
    searchResult: function(req,res){
        res.render('searchResult', { title:'Search Result'})
    },
}

module.exports = productController;
