const ProductModel = require("../../models/Product.js");

  exports.getOne = (req, res, next) => {
    // GỌI model
    let  productId = req.params.id;
   if (isNaN(id)) {
    res.render
   }
    // GỌI model
   
    ProductModel.ProductAll(function (data) {
      res.render("admin/product/list", {
        pageTitle: "Danh sách sản phẩm ",
        product: data,
      });
    });

    //   res.send(Product.ProductAll());
  };

