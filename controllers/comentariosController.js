const data2 = require('../db/comentarios');
const data = require('../db/productos');


const comentariosController = {
    comment: function(req, res){
        res.render('product', {comentario: data2.comentario});
        res.render('detalle', {comentario: data2.comentario})
        res.render('product', {comentario: data.lista});
    }
}

module.exports = comentariosController;