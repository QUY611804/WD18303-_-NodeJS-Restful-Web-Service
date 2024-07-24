
const ProductModel = require("../../models/Product");
exports.getProduct = (req, res, next) => {
  ProductModel.getAll(function (data) {
    res.status(200).json({
      data: data,
    });
  });
};

exports.addProduct = (req, res, next) => {
  const name_sp = req.body.name_sp;
  const price_sp = req.body.price_sp;
  const img_sp = file.filename;
  const Quantity = req.body.Quantity;

  const product = {
    name_sp: name_sp,
    price_sp: price_sp,
    img_sp: img_sp,
    Quantity: Quantity,
  };
  ProductModel.saveProduct(product, function (data) {
    res.status(201).json({
      message: "Thêm sản phẩm thành công",
      data: data,
    });
  });
};

exports.deleteProduct = (req, res, next) => {
  const productId = req.params.productId;
  ProductModel.deleteProduct(productId, function (affectedRows) {
    if (affectedRows > 0) {
      res.status(200).json({
        message: "Xóa thành công.",
      });
    } else {
      res.status(404).json({
        message: "Không xóa dc.Vui lòng thử lại.",
      });
    }
  });
};

exports.editProduct = (req, res, next) => {
  const productId = req.params.productId;
  const name = req.body.name;
  const price = req.body.price;
  const image = req.file.filename;
  const sale_price = req.body.sale_price;

  const product = {
    id: productId,
    name: name,
    price: price,
    image: image,
    sale_price: sale_price,
  };

  ProductModel.editProduct(product, function (affectedRows) {
    if (affectedRows > 0) {
      res.status(200).json({
        message: "Sủa sản phẩm thành công.",
      });
    } else {
      res.status(404).json({
        message: "Sản phẩm chưa dc chỉnh sửa.",
      });
    }
  });
};

exports.getOneProduct = (req, res, next) => {
  const productId = parseInt(req.params.productId);
  if (isNaN(productId)) {
    return res.status(404).json({
      message: "INVALID id",
      data: [],
    });
  }
  ProductModel.getOne(productId, function (data) {
    res.status(200).json({
      product: data,
    });
  });
};