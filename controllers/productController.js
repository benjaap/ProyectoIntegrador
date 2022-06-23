const db = require('./../database/models/index');
const bycript = require('bcryptjs');
const {Op, where} = require('sequelize');

const productController = {
    show: function(req, res){ 
        let id = req.params.id
        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
        } 

        db.products.findByPk(id, {
            include: [
                {association: 'users'},
                {association: 'comments'}
            ]
        })

        .then((data)=>{
            res.render('product', {product: data})
        })

        .catch((err)=>{
            console.log(err)
        })
        
        const prod = db.Products.findAll() //Revisar
        .then(function(prod){const auth2 = {name: prod.name, description: prod.description, image: prod.url_image, }
        }
        )

        db.users.create(productDetail)
            .then(data => {
                res.redirect('/')
            })
            .catch(e=>{
                console.log(e)
                res.send("Error al crear el usuario")
            })
        
        res.render('product', {Title: 'Detalle Producto', auth})
    },
    search: async function(req,res){
        const search = req.query.search
        let productos = []
        if(search){
            const consulta = {name: {[Op.like]: '%'+search+'%'}}
            productos = await db.products.findAll()
        } else{
            productos = await db.products.findAll()
        }
        

        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
            res.render('productsList', {productos}, auth)
        } else{
            res.redirect('/')
        }
        
    },
    add: function(req,res){
        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
        } 
        res.render('Add', {Title:'Productos', auth})
    },
<<<<<<< HEAD
    store: function(req, res){
=======
    store: function(req, res){ //Revisar
>>>>>>> 13efd8aacb5f24b9c399896e423b3dee912baf03
        let data = req.body;
        let newProduct = {
            name: req.body.name,
            description: req.body.description,
            url_image: req.body.url_image,
            users_id: req.body.user_id,
            created_at: new Date(),
            updated_at: new Date()
        }
        db.products.create(newProduct)
            .then( (productoCreado) => {
                return res.redirect('/');
            })
            .catch(error => {
                console.log("Error al crear el producto");
            })
    }
}

module.exports = productController;
