var express = require('express');
const comentariosController = require("../controllers/comentariosController");
var router = express.Router();

 router.get('/',comentariosController.comentarios);

module.exports = router;

