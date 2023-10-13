const http = require('http')
const express = require('express')
const app = express()


app.use((req,res,next) =>{
    console.log('In first middleware')
    next()
})

app.use('/w',(req,res,next) =>{
    console.log('In other middleware')
    res.send('<h1>Habibi welcome to kerala</h1>')
})

// const server = http.createServer(app)
// server.listen(5000)

app.listen(5000)