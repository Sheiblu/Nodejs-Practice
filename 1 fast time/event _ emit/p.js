var event = require('events');

// for basic Event 
var eventEmitter = new event.EventEmitter();

eventEmitter.on("a", function(){
    console.log("A is running ");
});



// for Object

var util = require('util');

var Student = function (name) {
 this.name = name ;
} 

var max = new Student('Max');

util.inherits(Student , event.EventEmitter);

max.on ('b' , function (){
    console.log("I am Ms. "+max.name);
});

max.emit('b');
