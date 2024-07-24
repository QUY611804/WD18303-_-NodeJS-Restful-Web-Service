const express = require("express");
const multer = require("multer");
const ProductController = require ("../controllers/api/ProductsController.js");
const router = express.Router();
// Cấu hình Multer để lưu trữ file với tên gốc
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./public/image");
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + "-" + file.originalname); // Lưu trữ file với tên gốc
    },
});
const upload = multer({
    storage: storage
}).single("image");

router.get('/product', ProductController.getProduct);
router.post('/product',upload, ProductController.addProduct);
router.delete('/product/:productId', ProductController.deleteProduct);
router.patch('/product/:productId',upload, ProductController.editProduct);
router.get('/product/:productId', ProductController.getOneProduct);


module.exports = router;