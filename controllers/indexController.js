const data = require('../db/productos');
const datac = require('../db/comentarios')
const indexController = {
    index: function(req, res){
        res.render('index', {title:'Express' });
        res.render('index', {lista: data.lista});
        res.render('index', {lista: datac.comentario});
    }
}


module.exports = indexController;

