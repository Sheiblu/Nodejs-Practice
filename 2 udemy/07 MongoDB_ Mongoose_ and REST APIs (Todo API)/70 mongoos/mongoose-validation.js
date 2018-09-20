const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type : String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});


var otherTodo = new Todo({
    text: 'Add io car',
    completedAt: 123

});

otherTodo.save().then((docs) => {
    console.log(JSON.stringify(docs, undefined, 2));
}, (err) => {
    console.log('Unable to Save for : ',err);
});