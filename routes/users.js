var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();

/* GET users listing. */
router.get('/', userController.user);

router.get("/register", userController.register);

router.get('/login',userController.login);

router.get('/editProfile',userController.editProfile)

router.get('/profile',userController.profile)

module.exports = router;
