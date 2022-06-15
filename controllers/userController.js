const db = require('../db/config/config');
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
    register: function(req, res){
        res.render('register', {title:"Register"})  
    },
    store: function(req,res){
            let errors = {}
            if(req.body.email == ""){
                errors.message = "El email es obligatorio";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            } else if(req.body.password == ""){
                errors.message = "La contraseña es obligatoria";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            } else if(req.body.retypePassword == ""){
                errors.message = "La contraseña es obligatoria";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            }else if(req.password != req.retypePassword){
                errors.message = "Las contraseñas no coinciden";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            } else if (req.file.mimetype !== 'image/png' && req.file.mimetype !== 'image/jpg' && req.file.mimetype !== 'image/jpeg'){
                errors.message = "El archivo debe ser jpg o png";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            }else {
                users.findOne({
                    where: [{email: req.body.email}]
                })
                .then(function(user){
                    if(user != null){
                        errors.message = "El email ya esta registrado por favor elija otro";
                        console.log(errors) // Guardar errors en locals
                        return res.render('register')
                    }else {
                        let user = {
                            name: req.body.name,
                            email: req.body.email,
                            password: bcrypt.hashSync(req.body.password, 10),
                            avatar: req.file.filename
                        }
                        users.create(user)
                            .then(user => {
                                return res.redirect('/')
                            })
                            .catch(e=>{
                                console.log(e)
                            })
                    }
                }
                )
            }
        }
    }
    

module.exports = userController;

