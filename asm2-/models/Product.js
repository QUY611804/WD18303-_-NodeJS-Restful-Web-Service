
  const db = require("./Database.js");
  module.exports = class Product {
    constructor(){
  }
    static getAll(callback) {
      let sql = `SELECT * FROM products`;
      db.query(sql, function (err, data) {
        if (err) throw err;
        callback(data);
      });
    }

    static saveProduct(products,callback) {
      db.query("insert into products SET ?", products, function (err, data) {
        if (err) throw err;
        callback(data);
        return true;
      });
    }

    static deleteProduct(productId, callback) {
      let sql = `DELETE FROM products WHERE id = ?`;
      db.query(sql, [productId], function (err, result) {
        if (err) throw err;
        callback(result.affectedRows);
      });
    }

    static editProduct(productData, callback) {
      let sql = `UPDATE products SET ? WHERE id = ?`;
      db.query(sql, [productData, productData.id], function (err, result) {
        if (err) throw err;
        callback(result.affectedRows);
      });
    }

    static getOne(productId, callback) {
      let sql = `SELECT * FROM products WHERE id = ${productId}`;
      db.query(sql, function (err, result) {
          if (err) throw err;
          callback(result);
      })  
    }

    //
  //   static getAll(callback) {
  //     db.query('SELECT * FROM products', (err, results) => {
  //         if (err) {
  //             callback(err, null);
  //             return;
  //         }
  //         callback(null, results);
  //     });
  // }






  }

      


