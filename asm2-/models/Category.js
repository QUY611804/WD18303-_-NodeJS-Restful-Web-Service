    const db = require("./Database.js");
    module.exports = class Category {
    constructor() {}

    static async CategoryAll(callback) {
        //trả về tất cả sản phẩm \
        let sql = `SELECT * FROM category`;
        await db.query(sql, function (err, data) {
        if (err) throw err;
        // callback :: chỉ dùng chạy thử nghiệm or dự án nhỏ
        callback(data);
        });
    }

    // static addProduct(product) {
    //     db.query("insert into products SET ?", product, function (err, data) {
    //     if (err) throw err;
    //     return true;
    //     });
    // }
    // }
    };

    // const sequelize = require("./Database.js");

    // const { Sequelize, DataTypes } = require("category");   

    // const Category = sequelize.define(
    // "categories",
    // {
    //     ct_id: {
    //     type: DataTypes.INTEGER,
    //     autoIncrement: true,
    //     primaryKey: true,
    //     },
    //     ct_name: Sequelize.STRING,
    // },
    // {
    //     timestamps: false,
    // }
    // );

    // module.exports = Category;
