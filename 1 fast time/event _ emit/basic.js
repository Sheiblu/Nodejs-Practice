var event = require('events');
var eventEmitter = new event.EventEmitter();

eventEmitter.on('clicked', function(){
    console.log("Somethink is Click");
});

eventEmitter.on('clickByValu', function(text) {
    console.log(text + " is Click");
})


console.log("\nCall 'clicked'")
eventEmitter.emit('clicked');

console.log("\nCall 'clickByValu'")
eventEmitter.emit('clickByValu', "Text from Head");
