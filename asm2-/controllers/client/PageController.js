exports.homePage = (req,res,next)=>{
  res.render("client/home")
}

exports.shopPage = (req,res,next)=>{
  res.render("client/shop")
}

exports.shop_detailPage = (req,res,next)=>{
  res.render("/client/shop_detail")
}

exports.cartPage = (req,res,next)=>{
  res.render("/client/cart")
}
