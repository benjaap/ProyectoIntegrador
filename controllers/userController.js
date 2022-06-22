const db = require('./../database/models/index');
const productos = require("../db/productos")
const Usuarios = require("../db/usuario")
let data = require("../db/usuario")
let db = require("../database/models")
let op = db.Sequelize.Op;
const bycript = require('bcryptjs');


const userController = {
    user: function(req, res){
        res.render('index', { title:'Usuarios' })
    },
    
    login: function(req, res){
        res.render('login', {title:'login'})
    },

    processLogin: async function(req, res){
        const email = req.body.email
        const password = req.body.password

        const user = await db.users.findOne({where:{email:email}})
        if (user) {
            if(bycript.compareSync(password,user.password_)){
                const auth = {id: user.id, name: user.name_, email: user.email }
                req.session.cookie.maxAge = 3600000;
                req.session.auth = auth;
                res.redirect('/')
            }

            else{
                res.send("Credenciales incorrectas")
            }
        } 
        else {
            res.send("Usuario no encontrado")
        }
    },

    profile: function(req, res){
        res.render('profile', {title:'profile'})
        const id = req.params.id

        db.User.findByPk(id,{
            include:[
                {
                    association: 'comments',
                    include: {
                        association: 'users'
                    }
                },
                {
                    association: 'products',
                    include: {
                        association: "comments"
                    }
                },
            ]
        })

        .then( (data) => {
            if (data == null) {
                return res.redirect('/')
            } else {
                return res.render('profile.ejs', { data:data })
            }
        })

        .catch((err)=>{
            console.log(err)
        })
    },

    editProfile: function(req, res){
        res.render('editProfile', {title:'Edit Profile'})
        const id = req.params.id

        if(req.session.user){
            if(id != req.session.user.id){
                return res.redirect(`/users/editProfile/${req.session.user.id}`) 
            }else{
                db.User.findByPk(id, {
                    include: [
                        {association: 'comments'},
                        {association: 'products'},
                    ]
                })
                .then((data)=>{
                    if (data == null) {
                        return res.redirect('/')
                    } else {
                        return res.render('editProfile.ejs', { data:data })
                    }
                })
                .catch((err)=>{
                    console.log(err)
                })
            }
        }else{
            res.redirect('/users/login')
        }
    },

    register: function(req, res){
        res.render('register', {title:"Register"})  
    },

    logout: function(req, res){
        req.session.destroy()
        res.clearCookie('userId')
        res.redirect('/')
    },

    store: function(req,res){
            let errors = {}
            if(req.body.email === ""){
                errors.message = "El email es obligatorio";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            } else if(req.body.password === ""){
                errors.message = "La contraseña es obligatoria";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            } else if(req.body.retypePassword === ""){
                errors.message = "La contraseña es obligatoria";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            }else if(req.password != req.retypePassword){
                errors.message = "Las contraseñas no coinciden";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            }else if (req.file.mimetype != 'image/png' && req.file.mimetype != 'image/jpg' && req.file.mimetype != 'image/jpeg'){
                errors.message = "El archivo debe ser jpg o png";
                console.log(errors) // Guardar errors en locals
                return res.render('register')
            }else {
                db.users.findOne({
                    where: {email: req.body.email}
                })
                .then(function(user){
                    if(user != null){
                        errors.message = "El email ya esta registrado por favor elija otro";
                        console.log(errors) // Guardar errors en locals
                        return res.render('register')
                    }else {
                        let newUser = {
                            name_: req.body.name,
                            email: req.body.email,
                            password_: bycript.hashSync(req.body.password, 10),
                            avatar: req.file.filename,
                            birth_date: req.body.fecha_de_nacimiento,
                            dni: req.body.numero_de_documento,
                            surname: req.body.surname,
                            created_at: new Date(),
                            updated_at: new Date()
                        }

                        if (req.file == undefined) {
                            user.avatar = req.session.user.avatar;    //que use el avatar previo
                        } else {
                            user.avatar = req.file.filename;
                        }                

                        db.users.create(newUser)
                            .then(data => {
                                res.redirect('/')
                            })
                            .catch(e=>{
                                console.log(e)
                                res.send("Error al crear el usuario")
                            })
                    }
                }
                )
            }
        }
    }
    

module.exports = userController;

