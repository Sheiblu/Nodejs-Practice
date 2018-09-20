
var yargs = require('yargs');
var notes = require('./notes');

var argv = yargs.argv ;
var commend = process.argv[2] ;

console.log(argv);
//console.log("Pass Valu is : " + argv['_'][1]);

if (commend === 'add'){
    var result =  notes.addNote(argv.title, argv.body);
        if (result) {
            console.log("\nSuccessfully Added");
            notes.printResult(result);
        } else {
            console.log("\nAlready Token");
        }

} else if (commend === 'list'){
    
    var notess = notes.getAll();
    notess.forEach((data) =>  notes.printResult(data));

} else if (commend === 'read'){
    var result = notes.getNote(argv.title);
        if (result) {
            console.log("\nData Found");
            notes.printResult(result);
        } else {
            console.log("\nData Not Found");
        }

} else if (commend === 'remove'){
    var result = notes.removeNote(argv.title);
    console.log( result ? 'Note Remove Successfully' : 'Note Not Found');  //  var message = result ? 'Note Remove Successfully' : 'Note Not Remove' ;

} else if (commend === undefined){   // ( typeof commend === 'undefined' )
    console.log("No Request found ");
} else {
    console.log("Wrong Request : "+commend);
}