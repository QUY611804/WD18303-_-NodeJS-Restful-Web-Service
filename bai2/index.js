const express = require("express");
var bodyParser = require("body-parser");
const multer = require("multer");
const app = express();

const port = 5000;
app.use(bodyParser.urlencoded());
var jsonParser = bodyParser.json();
app.use(express.static("public"));
const upload = multer({ dest: "./public/images" });
app.set("view engine", "ejs");
app.set("views", "views");

app.get("/", (req, res) => {
  res.render("home.ejs", { products: productslist });
});

app.get("/addnew", (req, res) => {
  res.render("addnew.ejs");
});

app.post("/stats", upload.single("uploaded_file"), function (req, res) {
  // req.file là tên tập tin của bạn trong mẫu trên, đây 'uploaded_file'
  // req.body sẽ giữ các trường văn bản, nếu có
  console.log(req.file, req.body);
});

app.post("/addnew", upload.single("uploaded_file"), (req, res) => {
  //lấy dữ liệu từ form sau khi upload anh
  const file = req.file;
  let title = req.body.productName;
  let price = req.body.price;
  let description = req.body.description;
  let nameImage = file.filename;
  //Thêm vào mảng json 1 cuối sách mới
  productslist.push({
    id: 1,
    title: title,
    price: price,
    description: description,
    image: nameImage,
  });
  //chuyển về trang sản phẩm
  res.redirect("/shop");
});

const productslist = [
  {
    id: 1,
    title: "Apple Book",
    price: 3000,
    description:
      "A very interesting book about so many even more interesting things!",
    image: "OIP.jpg",
  },
  {
    id: 2,
    title: "Microsoft Book",
    price: 2000,
    description:
      "A very interesting book about so many even more interesting things!",
    image: "OIP.jpg",
  },
  {
    id: 3,
    title: "VFast Book",
    price: 1000,
    description:
      "A very interesting book about so many even more interesting things!",
    image: "OIP.jpg",
  },
  {
    id: 4,
    title: "VFast Book",
    price: 231231,
    description:
      "A very interesting book about so many even more interesting things!",
    image: "OIP.jpg",
  },
];

app.get("/shop", (req, res) => {
  res.render("shop.ejs", { products: productslist });
});

app.post("/api/users", jsonParser, function (req, res) {
  res.send(req.body);
});

// app.post("/product", jsonParder, function (req, res) {
//   Console.log(req.body.ProductName);
//   productslist.unshift(req.body.ProductName);
//   res.send(req.body);
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
