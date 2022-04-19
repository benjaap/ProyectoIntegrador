const comentarios = require('../db/comentarios');


const comentariosController = {
    comment: function(req, res){
        return res.render('product', {comentario: data.comentario});
    }
}

module.exports = comentariosController;