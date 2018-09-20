var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');

var app = express();
app.use(bodyParser.json());

app.post('/todos', (req, res) => {
   var todo = new Todo({
       text: req.body.text
   });

   todo.save().then((doc) => {
       res.send(doc);
   }, (e) => {
       res.status(404).send(e);
   })
});

app.listen(3000, () => {
    console.log('Started on port 3000');
});


module.exports = {app};