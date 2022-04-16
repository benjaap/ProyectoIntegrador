const userController = {
    user: function(req, res){
        res.render('index', { title:'Usuarios' })
    },
    login: function(req, res){
        res.render('login', {title:'login'})
    },
    profile: function(req, res){
        res.render('profile', {title:'profile'})
    },
    editProfile: function(req, res){
        res.render('editProfile', {title:'Edit Profile'})
    },
}

module.exports = userController;

