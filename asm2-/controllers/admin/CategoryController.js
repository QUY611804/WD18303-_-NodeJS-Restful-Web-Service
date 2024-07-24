const Category = require("../../models/Category.js");

  exports.getCategory = (req, res, next) => {
    // GỌI model
    Category.CategoryAll(function (data) {
      res.render("admin/category/list", {
        pageTitle: "Danh sách sản phẩm ",
        product: data,
      });
    });

    //   res.send(Product.ProductAll());
  };


  // exports.getCategory = async (req, res, next) => {
  //   try {
  //     const category = await Category.findAll({
  //       attributes: ["ct_id", "ct_name"],
  //     });
  
  //     // Render view và truyền dữ liệu sản phẩm vào
  //     res.render("admin/category/list", { category });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).send('Internal Server Error');
  //   }
  // };