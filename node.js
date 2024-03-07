const http = require('http');

const server = http.createServer((req,res) =>{
    res.setHeader('content-type', 'text/html');
    res.write('<html><head>TechConnect</head><body><h2>Hello from the Server</h2></body></html>');
})

server.listen(8000, ()=>{
    console.log("server is listening on port 8000");
})