const express = require("express")
const router = express.Router('')
const path = require('path')
const adminData = require('./admin')
router.get("/",(req,res)=>{
    // console.log('admin.js',adminData.products)
    // res.sendFile(path.join(__dirname,'../','pages/shop.html'))
    const products = adminData.products ;
    res.render('shop',{prods:products, docTitle:"Shop🛒"})
})
module.exports = router;