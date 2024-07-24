const User = require("../../models/Product.js");

  exports.singupUser = async (req, res, next) => {
const user = {

    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    SDT: req.body.number,
    note: req.body.text



}

    // Find all users
    const userResponse = await User.create(user ,{
      fields: [ `id`, `name`, `emai`, `password`, `SDT`, `note`, `createdAt`, `updatedAt`]
    });
    res.status(200).json({
      pageTitle: "Danh sách người dùng  ",
      data:userResponse ,
    });
  };


