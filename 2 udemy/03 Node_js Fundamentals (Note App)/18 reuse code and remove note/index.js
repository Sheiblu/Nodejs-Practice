
var yargs = require('yargs');
var notes = require('./notes');

var argv = yargs.argv ;
var commend = process.argv[2] ;

console.log(argv);
//console.log("Pass Valu is : " + argv['_'][1]);


if (commend === 'add'){
    var result =  notes.addNote(argv.title , argv.body);

    if (result) {
        console.log("Successfully Added");
        console.log(`Title: ${result.title}`);
    } else {
        console.log("Already Token");
    }
} else if (commend === 'list'){
    notes.getAll();
} else if (commend === 'read'){
    notes.getNote(argv.title);

} else if (commend === 'remove'){
    var result = notes.removeNote(argv.title);
    console.log( result ? 'Note Remove Successfully' : 'Note Not Found');  //  var message = result ? 'Note Remove Successfully' : 'Note Not Remove' ;

} else if (commend === undefined){   // ( typeof commend === 'undefined' )
    console.log("No Request found ");
} else {
    console.log("Wrong Request : "+commend);
}