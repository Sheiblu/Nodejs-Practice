
var {argv} = require('yargs');
var notes = require('./notes');

//var argv = yargs.argv ;
var commend = process.argv[2] ;

console.log(argv);
console.log("Pass Valu is (process.argv): " + commend);
console.log("Pass Valu is (yargs.argv): " + argv['_'][1]);


if (commend === 'add'){
    notes.addNote(argv.name , argv.age);
} else if (commend === 'list'){
    notes.getAll();
} else if (commend === 'read'){
    notes.getNote(argv.name);
} else if (commend === 'remove'){
    notes.removeNote(argv.name);
} else if (commend === undefined){ // ( typeof commend === 'undefined' )
    console.log("No Request found ");
} else {
    console.log("Wrong Request : "+commend);
}