const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))


app.use('/add-product',(req,res,next) =>{
    res.send(`<form action='/product' method="POST">
    
    <input type="text" name="title" />
    
    <button type='submit'>Submit</button>
    
    </form>`);
    
})

app.use('/product',(req,res) =>{
    console.log(req.body)
    res.send("😒")
})

app.use('/',(req,res,next) =>{
console.log("always")
res.send('Heloooo')

})
    

app.listen(5000)