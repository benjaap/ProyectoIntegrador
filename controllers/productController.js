const productos = require('../db/productos')
const comentarios = require('../db/comentarios')

const productController = {
    detalle: function(req, res){
        let idProducto = req.params.id;
        if(id==undefined){
            return res.send('No ingresaste un producto');
        }
        res.render('product')
        // encontrar el producto con el id que te llego

        // todos los comentarios de ese producto

        res.render('product', { producto: product, comentarios: coments})
    },
    Add: function(req, res){
        res.render('Add', { title:'Agregar Producto' })
    },
    searchResult: function(req,res){
        res.render('searchResult', { title:'Search Result'})
    },
}

module.exports = productController;
