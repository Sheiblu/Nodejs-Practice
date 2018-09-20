 var fs = require('fs'); 

 var text = fs.readFileSync('test.txt', 'utf8');

console.log(text);



fs.writeFileSync( 'wrtest.txt' , text);

console.log("Run");
