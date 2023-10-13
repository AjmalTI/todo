const express = require("express")
const app = express()
const path = require('path')
const {Item} = require('./Data')


app.get('/',(req,res)=>{
   res.send('<a href="/api/products">Products</a>')
})

app.get('/api/products',(req,res)=>{

    const newProducts=Item.map((product)=>{
        const{id,name,price}= product;
        return{id,name,price}
    })
    res.json(newProducts)
// res.sendFile(path.resolve(__dirname,"./pages/Home.html"))
// res.json([{name:'Ajmal'},{name:"Anwar"},])
// res.json(Item)
})

app.get("/api/products/:productId",(req,res)=>{
    const {productId} = req.params
const singleProduct = Item.find((product)=>
product.id === Number(productId)
)
res.json(singleProduct)
console.log(req.params)
})


app.get('/about',(req,res)=>{
   res.send('About page')
}) 
app.all('*',(req,res)=>{
    res.status(404).send('<h1>Resource not found..!</h1>')
})
app.listen(5000
    ,()=>{
    console.log("server is runing on port 5000")
})