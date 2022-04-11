const userController = {
    user: function(req, res){
        res.render('index', { title:'Usuarios' })
    }
}

module.exports = userController;