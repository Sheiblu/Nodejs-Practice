var event = require('events');
var util = require('util');

var Student = function(name) {
    this.name = name ;
}

util.inherits (Student , event.EventEmitter);

var max = new Student('Mark');

max.on('second', function(mark){
    console.log(max.name + " Got " + mark +" mark in Abdj");
})

max.emit('second', 60);