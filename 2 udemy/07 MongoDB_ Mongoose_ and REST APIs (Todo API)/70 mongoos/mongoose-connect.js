const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type : String
    },
    completed: {
        type: Boolean
    },
    completedAt: {
        type: Number
    }
});

var newTodo = new Todo({
    text : 'Cook dinner'
});

newTodo.save().then((docs) => {
    console.log('Save Todo', docs);
}, (err) => {
    console.log('Unable to Save Todo');
});


var otherTodo = new Todo({
    text: 'Cook dinner',
    completed: true ,
    completedAt: 123

});

otherTodo.save().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to Save Todo');
});