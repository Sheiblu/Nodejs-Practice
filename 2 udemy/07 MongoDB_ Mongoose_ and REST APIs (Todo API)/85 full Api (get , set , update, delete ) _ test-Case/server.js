const {ObjectID} = require('mongodb');
const _ = require('lodash');

const express = require('express');
const bodyParser = require('body-parser');

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
       res.status(400).send(e);
   })
});


app.get('/todos', (req, res) => {
    Todo.find().then((docs) => {
        res.send({docs});
    },(e) => { 
        res.status(400).send(e);
    })
});



app.get('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)){
        return res.status(404).send();
    }

    Todo.findById(id).then((dosc) => {
        if(!dosc) {
            return res.status(404).send();
        }
        res.send(dosc);
    }).catch((e) => {
        res.status(400).send();
    });
});

 
app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;

    if(!ObjectID.isValid(id)) return res.status(404).send();
    
    Todo.findByIdAndRemove(id).then((doc) => {
        if(!doc) return res.status(404).send();

        res.send(doc);
    }).catch((e) => {
        res.status(400).send();
    });
}); 


app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if(!ObjectID.isValid(id)) return res.status(404).send();

    if(_.isBoolean(body.completed) && body.completed){  //  _isBo = check user give 'body.completed' value && .comp = check value is true
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }

    Todo.findByIdAndUpdate(id, {$set : body}, {new: true})
                        .then((doc) => {
                            if(!doc) return res.status(404).send();
                            res.send({doc});
                        }).catch((e) => {
                            res.status(400).send();
                        })

});  



 
app.listen(3000, () => {
    console.log('Started on port 3000');
});

module.exports = {app};