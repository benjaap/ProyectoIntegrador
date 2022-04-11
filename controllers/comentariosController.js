const comentariosController = {
    comentarios: function(req,res){
        res.render('index', { title: 'comentarios'})
    }
    
}
module.exports = comentariosController;