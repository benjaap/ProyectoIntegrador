var express = require('express');
const comentariosController = require("../controllers/comentariosController");
var router = express.Router();

/* GET home page. */
 router.get('/',function(req, res){
  res.send('')
  });

module.exports = router;

