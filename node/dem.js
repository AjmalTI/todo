
const http = require('http');

const server = http.createServer((req,res)=>{
const url =req.url;
if (url === "/"){

}
    // console.log(req.url,req.headers,req.method)
    res.setHeader("Content-Type","text/html");
    res.write('<html>')
    res.write('<head><title>Node</title></head>')
    res.write(`<body>
    <h1>Welcome</h1>
    </body>`)
    res.write('</html>')
    res.end()
})
server.listen(2000)