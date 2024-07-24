const express = require('express');
const multer = require('multer');
const { render } = require('ejs');
const upload = multer({dest: './public/image'})
const PageController = require("../controllers/client/PageController");
// const {shopPage} = require("../controllers/client/PageController");
const router = express.Router();


router.get("/",PageController.homePage);
router.get("/shop",PageController.shopPage);
router.get("/shop_detail",PageController.shop_detailPage);
router.get("/cart",PageController.cartPage);
module.exports = router;