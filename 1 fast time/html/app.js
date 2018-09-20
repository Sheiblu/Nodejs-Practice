var fs = require('fs');

var http = require('http');

var readStream = fs.createReadStream('new.html', 'utf8');


http.createServer ((req , res ) => {
    res.setHeader('Content-Type', 'text/html');
    readStream.pipe(res);
}).listen(3000);


console.log('Server in running');

