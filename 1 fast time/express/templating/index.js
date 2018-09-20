var express = require('express');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.sendFile(__dirname + '/home.html');
});

app.get('/about', function(req, res){
    res.sendFile(__dirname + '/about.html')
});

app.get('/index', function(req, res){
    res.send("This is Home");  
});


var student = {
    1 : 'Sheiblu',
    2 : 'Ikbal' ,
    3 : 'Asif'
}

app.get('/student/:id', function(req, res){
    res.render('student', { name : student[req.params.id],
                             id : req.params.id});
});

var students = {
    1 :  { name : 'Sheiblu' , subjects : ['C', 'Java', 'python','C#', 'Php','JavaScript']},
    2 :  { name : 'Ikbal' , subjects : ['C', 'Java', 'C++', 'Php']},
    3 :  { name : 'Asif' , subjects : [ 'Java', 'python','C#', 'Php']}
}


app.get('/students/:id', function(req, res){
    res.render('students', { name : students[req.params.id].name ,
                             subjects : students[req.params.id].subjects
                            }
              );
});

app.get('*', function(req, res){
    res.send("404 Error");  
});

app.listen(3000, function() {
    console.log("Server is running");
});