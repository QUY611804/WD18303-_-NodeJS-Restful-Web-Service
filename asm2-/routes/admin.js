const express = require('express');
const ProductController = require('../controllers/admin/ProductsController');
const router = express.Router();
const multer = require('multer');
const { render } = require('ejs');
const { getCategory } = require('../controllers/admin/CategoryController');
const { homePage, loginPage } = require('../controllers/admin/PageController');
const { getUsers } = require('../controllers/admin/UserController');
const upload = multer({dest: './public/image'})




// =========================admin===============
router.get('/',homePage);
router.get('/login',loginPage);
router.get('/product',ProductController.getProducts);
router.get('/category',getCategory);
router.get('/user',getUsers);
// router.get('/add',ProductController.addProduct);
// router.post('/add',upload.single('images'),ProductController.postProduct);
// ==============================================
module.exports = router;