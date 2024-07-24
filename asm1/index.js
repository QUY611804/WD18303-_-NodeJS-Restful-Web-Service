const express = require("express");
var bodyParser = require("body-parser");
const app = express();
const port = 5000;
app.use(bodyParser.urlencoded());
var jsonParser = bodyParser.json();

app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.static("public")); 



// ====================================
// app.get("/", (req, res) => {
//   res.render("home.ejs");
// });

// app.get("/product", (req, res, next) => {
//   res.render("product.ejs");
// });

// app.get("/category", (req, res,next ) => {
//   res.render("category.ejs");
// });

app.get("/user_shop", (req, res,next ) => {
  res.render("user_shop.ejs");
});

app.get("/user_home", (req, res,next ) => {
  res.render("user_home.ejs");
});




// ===========================ADMIN==================
app.get("/admin_home", (req, res,next ) => {
  res.render("admin_home.ejs");
});
app.get("/admin_user", (req, res,next ) => {
  res.render("admin_user.ejs");
});
app.get("/admin_product", (req, res,next ) => {
  res.render("admin_product.ejs");
});
app.get("/admin_category", (req, res,next ) => {
  res.render("admin_category.ejs");
});
app.get("/admin_sign-in", (req, res,next ) => {
  res.render("admin_sign-in.ejs");
});


// ========================
// app.get("/add-products", (req, res, next) => {
//   res.send(
//     '<form action="/profduct" method="POST"><input type="text" placeholder="Product"><button type="submit">Add Product</button></form>'
//   );
// });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
