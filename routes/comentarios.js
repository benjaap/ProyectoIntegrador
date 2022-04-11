var express = require('express');
const indexController = require("../controllers/indexController")
var router = express.Router();

const mainController = require("../controllers/indexController")

// router.get("/", indexController)

/* GET home page. */
 router.get('/', function(req, res) {
   res.render('index', { title: 'Express' });
 });

module.exports = router;

