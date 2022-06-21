const indexController = {
    index: function(req, res){
        let auth = null 
        if(req.session.auth){
            auth = req.session.auth
        }
        res.render('index', {title:'Express', auth});
    }
}


module.exports = indexController;

