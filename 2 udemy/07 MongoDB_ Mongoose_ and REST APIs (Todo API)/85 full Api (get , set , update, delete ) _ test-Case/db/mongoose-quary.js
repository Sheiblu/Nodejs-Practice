
const {ObjectID} = require('mongodb');
const {mongoose} = require('./mongoose');
const {Todo} = require('./../models/todo');


var id = '5b6f5f9c04c98f14b03232a9'; 

if (!ObjectID.isValid(id)) {
     return console.log('\n\n\tInvalide id \n\n');
     }

Todo.find({
    _id : id
}).then((docs) => {
    console.log("\nData Form Find\n\n\t",docs);
});

Todo.findOne({
    _id : id
}).then((docs) => {
    console.log("\nData Form FindOne\n\n\t",docs);
});

Todo.findById(id).then((docs) => {
    if(!docs) {
       return console.log('\n\nData Not Found');
    }
    console.log("\nData Form findById\n\n\t",docs);
}).catch((e) => console.log("\nData Form FindById\n\t", e)) ;

