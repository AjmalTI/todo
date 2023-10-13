const express = require("express")
const router = express.Router()
const path = require('path')
const products =[]


router.get("/add-product",(req,res,next)=>{
    // res.sendFile(path.join(__dirname,'../','pages/add-product.html'))
    res.render('add-product',{pageTitle:"Add Product",
path:"/admin/add-product"
})

});

router.post('/product',(req,res)=>{
    products.push(req.body)
    console.log(req.body)
    res.redirect('/shop')
})

exports.routes = router;
exports.products=products;
