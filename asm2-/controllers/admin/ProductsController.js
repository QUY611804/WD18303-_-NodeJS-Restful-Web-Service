const Product = require("../../models/Product.js");

  exports.getProducts = (req, res, next) => {
    // GỌI model
    Product.ProductAll(function (data) {
      res.render("admin/product/list", {
        pageTitle: "Danh sách sản phẩm ",
        product: data,
      });
    });

    //   res.send(Product.ProductAll());
  };

  
