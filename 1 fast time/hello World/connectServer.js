var conn = require('http');
var a = require('fs');
var host ="127.0.0.4"

conn.createServer(function say(req, res){
    res.writeHead(205, {
        'content-type' : 'text/plain',
        'content-length' : 30
    });
    res.end("hello Your Host is : "+host+ " : 3000");
}).listen(3000, host);

console.log("Connect host "+host);