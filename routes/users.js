var express = require('express');
const userController = require('../controllers/userController');
var router = express.Router();
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req,file, cb)=> {
        cb(null, path.join(__dirname, './../public/images/users/avatar'));
    },
    filename: (req,file, cb) => {
        cb(null, file.fieldname + (new Date()).getTime() + path.extname(file.originalname))
    }
});
const upload = multer({ storage: storage});

/* GET users listing. */
router.get('/', userController.user);

router.get("/register", userController.register);
router.post("/register", upload.single('fotodeperfil'), userController.store);

router.get('/login',userController.login);
router.post('/login', userController.processLogin)
router.get('/editProfile',userController.editProfile)

router.get('/profile',userController.profile)

module.exports = router;
