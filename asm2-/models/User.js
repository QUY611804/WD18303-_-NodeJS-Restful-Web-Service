const db = require("./Database.js");
module.exports = class User {
  constructor() {}

  static async UserAll(callback) {
    //trả về tất cả sản phẩm \
    let sql = `SELECT * FROM users`;
    await db.query(sql, function (err, data) {
      if (err) throw err;
      // callback :: chỉ dùng chạy thử nghiệm or dự án nhỏ
      callback(data);
    });
  }
};
