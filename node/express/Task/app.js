const express = require('express')
const app = express()
const pros = require('./Data')

app.get('/',(req,res)=>{
    res.send(`<a href='/products'><button >Products</button></a>`)
})

app.get('/products',(req,res)=>{
    console.log(req.params);

    let category = req.query.category
    let name = req.query.name
    let price = req.query.price

    if(category){
        const catFilter = pros.filter((pros)=>{
            return pros.category.startsWith(category.toLowerCase())
        })
        res.json(catFilter)
    }
    else if(name){
        const nameFilter = pros.filter((pros)=>{
            return pros.name.startsWith(name.toLowerCase())
        })
        res.json(nameFilter)
    }
    else if(price){
        const priceFilter = pros.filter((pros)=>{
            return pros.price.startsWith(price.toLowerCase())
        })
        res.json(priceFilter)
    }
    else{
        res.json(pros)
    }
    console.log(req.query)
    // const products=pros.map((prd)=>{
    //     const{id,price}=prd;
    //     return  {id,price}
    // })
    //res.json(products)
})



app.listen(3000,()=>{
    console.log("Server started")
})