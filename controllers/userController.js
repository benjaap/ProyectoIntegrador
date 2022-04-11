const userController = {
    user: function(req, res){
        res.render('index', { title:'Usuarios' })
    },
    login: function(req, res){
        res.render('login', {title:'login'})
    }
}

module.exports = userController;