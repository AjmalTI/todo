const express = require('express')
const bodyParser = require('body-parser')
const path= require("path")
const adminData = require('./routes/admin')
const shopRoute = require('./routes/shop')

const app = express()

app.set("view engine","pug")
app.set("views","pages")


app.use(bodyParser.urlencoded({extended:false}))

app.use(express.static(path.join(__dirname,'public')))

app.use('/admin',adminData.routes)
app.use('/shop',shopRoute)


app.use((req,res,next)=>{
    // res.status(404).sendFile(path.join(__dirname,'pages/404.html'))
    res.status(404).render('404')
})

app.listen(8000,()=>{
    console.log('server 8000')
})