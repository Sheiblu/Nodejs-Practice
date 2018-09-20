var fs = require('fs');

var readStream = fs.createReadStream('text.txt','utf8');
var writeStream = fs.createWriteStream('textWrite.txt');

readStream.on('data', function(chuck){
    console.log("\n\n\n............................ Start............\n\n\n");
    //console.log(chuck);
    writeStream.write(chuck);
});

readStream.on('hello', function() {
    console.log("\n\n\n............................End............\n\n\n");
})