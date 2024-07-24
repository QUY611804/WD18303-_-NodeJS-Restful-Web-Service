const User = require("../../models/User.js");

  exports.getUsers = (req, res, next) => {
    // GỌI model
    User.UserAll(function (data) {
      res.render("admin/user/list", {
        pageTitle: "Danh sách người dùng",
        product: data,
      });
    });

    //   res.send(Product.ProductAll());
  };
