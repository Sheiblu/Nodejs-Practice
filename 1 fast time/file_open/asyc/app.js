var fs = require('fs');

var text = fs.readFile('test.txt', 'utf8' , function (err , data){
        if (err){
            return console.error(err);
        }
        
        console.log(data);
});


console.log(text);


fs.writeFile('wrtest.txt', text, function (err , data){
    if (err) {
        return console.error(err);
    }
    
    console.log("-----Data add---");
});
