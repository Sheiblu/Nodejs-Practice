var express = require('express');
var bodyParser = require('body-parser'); 


var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended : false});


app.set('view engine', 'ejs');

app.use('/assets', express.static('assets'));


app.get('/', function (req, res){
    res.render('home');
});

app.get('/about', function (req, res){
    res.render('about');
});

app.get('/contact', function (req, res){
    res.render('contact' ,{qs : req.query});
});

app.post('/contact-success', urlencodedParser, function (req, res){
    console.log(req.body);
    res.render('contact-success' ,{qs : req.body});
});

app.get('*', function (req, res){
    res.render('error');
});



app.listen(3000, '127.0.0.1' , function() {
    console.log("Server Running .......");
});