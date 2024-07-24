// const Category = require("../../models/Category");

// exports.getCategory = async (req, res, next) => {
//   const category = await Category.findAll({
//     attributes: ["ct_id", "ct_name"],
//   });
//   res.status(200).json({
//     data: category,
//   });
// };

// exports.getOneCategory = async (req, res, next) => {
//   const id = parseInt(req.params.id);
//   if (isNaN(id)) {
//     return res.status(404).json({
//       message: "INVALID id",
//       data: [],
//     });
//   }

//   const category = await Category.findByPk(id, {
//     attributes: ["ct_id", "ct_name",],
//   });
//   res.status(200).json({
//     message: "Success",
//     data: category,
//   });
// };

// exports.deleteCategory = async (req, res, next) => {
//   const { id } = req.params;

//   const deletedcategory = await Category.destroy({
//     where: { id: id },
//   });

//   if (deletedcategory === 0) {
//     return res.status(404).json({
//       message: "Category not found",
//     });
//   }

//   res.status(200).json({
//     message: "Category deleted successfully",
//   });
// };

// exports.createCategory = async (req, res, next) => {
//   let category = {
//     name: req.body.name,
//     // phone: req.body.phone,
//     // // password: req.file.filename,
//     // password: req.body.password,
//     // email: req.body.email,
//     // permission: req.body.permission,
//   };
//   const CategoryRes = await Category.create(category, {
//     fields: ["name"],
//   });
//   res.status(200).json({
//     data: CategoryRes,
//   });
// };

// exports.updateCategory = async (req, res, next) => {
//   try {
//     const id = req.params.id;
//     const category = {
//       name: req.body.name,
//       // phone: req.body.phone,
//       // // password: req.file.filename,
//       // password: req.body.password,
//       // email: req.body.email,
//       // permission: req.body.permission,
//     };
//     const [updatedRowCount, updatedCategoryRes] = await Category.update(category, {
//       where: { id: id },
//       returning: true,
//     });
//     if (updatedRowCount === 0) {
//       return res
//         .status(404)
//         .json({ error: "Không tìm thấy sản phẩm để cập nhật" });
//     }
//     res.status(200).json({
//       message: "Cập nhật sản phẩm thành công",
//       data: updatedCategoryRes[0],
//     });
//   } catch (error) {
//     console.error("Lỗi khi cập nhật sản phẩm:", error);
//     res.status(500).json({ error: "Đã xảy ra lỗi khi cập nhật sản phẩm" });
//   }
// };
