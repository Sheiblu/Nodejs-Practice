
var http = require("http");

http.createServer(function (req, res){
    // res.writeHead(200, {'Content-Type ' : 'text/plain'});
    res.end("Hello Node me\n");
}).listen(3000);

console.log("Server is running on Http://127.0.0.1:3000");