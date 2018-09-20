
const {ObjectID} = require('mongodb');
const {mongoose} = require('./mongoose');
const {Todo} = require('./../models/todo');


var id = '5b6f5f9c04c98f14b03232a6'; 

if (!ObjectID.isValid(id)) {
     return console.log('\n\n\tInvalide id \n\n');
     }

 // Todo.remove

 Todo.findByIdAndRemove({_id: id}).then((docs) => {
    if(!docs) {
        return console.log('\n\nData Not Found');
     }
     console.log("\nData Delete Successfully \n\n\t",docs);
});

