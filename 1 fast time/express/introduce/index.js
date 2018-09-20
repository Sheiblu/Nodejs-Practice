var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.send("This is Home");
});

app.get('/about', function(req, res){
    res.send("This is About");
});

app.get('/index', function(req, res){
    res.send("This is Home");  
});

var students = {
    1 : 'Sheiblu',
    2 : 'Ikbal',
    3 : 'Asif'
}

app.get('/student/:name', function(req, res){
    res.send("This is Student Page.  <br> Student id : "+ students[req.params.name]);  
});

app.listen(3000, function() {
    console.log("Server is running");
});