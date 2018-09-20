var fs = require('fs');
var http = require('http');


http.createServer((req , res) => {

    if(req.url.toLowerCase() === '/home' || req.url === '/' || req.url.toLowerCase() === '/index'){
        res.writeHead( 200 , {'Content-Type' : 'text/html' });
        fs.createReadStream('home.html').pipe(res);


    } else if (req.url.toLowerCase() === '/about') {
        res.setHeader('Content-Type' , 'text/html' );
        fs.createReadStream('about.html').pipe(res);
        

    } else if (req.url.toLowerCase() === '/api'){

        res.writeHead( 200 , {'Content-Type' : 'application/json' });
        var jsonObj =  [
            { 
                Name : 'Sheiblu' ,
                Reg : 'Muslim' ,
                age : 23 } ,
    
            {
                Name : 'Shehab' ,
                Reg : 'Muslim' ,
                age : 20 }
            ];

        res.end(JSON.stringify(jsonObj));

    } else {

        res.writeHead(404 , {'Content-Type': 'text/html'}) ;
        fs.createReadStream('error.html').pipe(res);

    }

}).listen(3000) ;

console.log("Routing Server is Run now ..............");