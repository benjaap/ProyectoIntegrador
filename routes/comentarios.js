var express = require('express');
const comentariosController = require("../controllers/comentariosController");
var router = express.Router();

 router.get('/comment', comentariosController.comment);

module.exports = router;

