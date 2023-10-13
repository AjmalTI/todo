const http = require('http')
const express = require('express')
const app = express()


app.use('/user',(req,res,next) =>{
    console.log('In first middleware')
    res.send('<h1> Welcome to kerala</h1>')
})

app.use('/',(req,res,next) =>{
    console.log('In other middleware')
    res.send('<h1>Habibi</h1>')
    next()
})

// const server = http.createServer(app)
// server.listen(5000)

app.listen(5000)