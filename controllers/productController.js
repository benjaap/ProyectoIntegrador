const data2 = require('../db/comentarios');
const data = require('../db/productos');

const productController = {
    detalle: function(req, res){
        res.render('product', {title:'Express' });
        res.render('product', {comentario: data2.comentario});
        res.render('product', {comentario: data.lista});

    },
    Add: function(req, res){
        res.render('Add', { title:'Agregar Producto' })
    },
    searchResult: function(req,res){
        res.render('searchResult', { title:'Search Result'})
    },
}

module.exports = productController;
