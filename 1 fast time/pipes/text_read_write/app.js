var fs = require('fs');

var http = require('http');

var readStream = fs.createReadStream('text.txt');
var writeStream = fs.createWriteStream('write.txt');


http.createServer ((req , res ) => {
    res.setHeader('Content-Type', 'text/plain');
    readStream.pipe(res);
}).listen(3000);


console.log('Server in running');

