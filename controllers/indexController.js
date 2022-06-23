const db = require('./../database/models/index')
const indexController = {
    index: function(req, res){
        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
        }
        
        db.products.findAll({limit:10})
            .then(productos => {
                res.render('index', {title:'Express', auth, productos});
            }) 
            .catch(error => {res.send("Errror al conectarse a la base de datos" + error)})

    }
}


module.exports = indexController;

