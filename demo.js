var http = require('http')
var a =10
var b = 200
var c = a+b
http.createServer(function(req,res){
    res.writeHead(200,{'Content-type': 'text/html'})
    res.write("Hello Line 1<br/>")
    res.write(`A value is ${a} <br/> B value is ${b} <br/> Sum is: ${c}`)
    if(req.url == '/home') {
        res.write("Home Page")
        res.end()
    }
    else if(req.url == '/about') {
        res.write(JSON.stringify({'flag': 1, 'msg': "Record Added"}))
        res.end()
    }
    else {
        res.write("<br/>Welcome to website")
        res.end()
    }
    res.end()
}).listen(4000)

console.log("Server started on http://127.0.0.1:4000")