
var argv = process.argv ;
var commend = argv[2]; // = process.argv[2] ;

console.log(argv);
console.log("Pass Valu is : " + commend);

if (commend === 'add'){
    console.log("Input Req node for : "+commend);
} else if (commend === 'list'){
    console.log("Input Req node for : "+commend);
} else if (commend === 'read'){
    console.log("Input Req node for : "+commend);
} else if (commend === 'remove'){
    console.log("Input Req node for : "+commend);
} else if (commend === undefined){ // ( typeof commend === 'undefined' )
    console.log("No Request found ");
} else {
    console.log("Wrong Request : "+commend);
}