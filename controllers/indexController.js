const data = require('../db/productos')
const indexController = {
    index: function(req, res){
        res.render('index', { title:'Express' });
        return res.render('index',{lista: data.lista});
    }
}



module.exports = indexController;

