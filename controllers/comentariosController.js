const comentarios = require('../db/comentarios');


const comentariosController = {
    comment: function(req, res){
        return res.render('product', {comentario: data.comentario});
    },
    comment2: function(req,res){
        return res.render('index', {comentario: data.comentario})
    }
}

module.exports = comentariosController;