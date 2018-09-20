var express = require('express');
var todoController = require('./controllers/todoController');



var app = express();

app.set('view engine' , 'ejs');


//static file
app.use( express.static('public'));


// Controller 1

todoController(app);




//listen port
app.listen(3000);
console.log("Server Is running in  3000 port");