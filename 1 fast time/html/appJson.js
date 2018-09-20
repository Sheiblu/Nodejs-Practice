var fs = require('fs');
var http = require('http');
var num = 1 ;

http.createServer((req , res) => {

    console.log("Refresh : "+num++ + "  Url : "+ req.url );
    res.writeHead (200 , {'Content-Type' : 'Application/json' });

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

}).listen(3000);

console.log("Service is running  Now .............")

