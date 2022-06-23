const db = require('./../database/models/index');
const bycript = require('bcryptjs');
const {Op} = require('sequelize');

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
    },
    list: async function(req,res){
        const search = req.query.search
        let productos = []
        if(search){
            const consulta = {name: {[Op.like]: '%'+search+'%'}}
            productos = await db.products.findAll({
                where: consulta
            })
        } else{
            productos = await db.products.findAll()
        }
        res.render('productList', {productos})
    },
    store: function(req, res){
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
