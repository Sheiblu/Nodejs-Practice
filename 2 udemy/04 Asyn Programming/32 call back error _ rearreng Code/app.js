
var geoCode = require('./geoCode/geoCode');


var yargs = require('yargs');

var args = yargs
        .option({
           a: {
              demand : true,
              describe: 'Address to fetch weather for',
              alias: 'address',
              string: true
           },
        })
        .help()
        .alias('help', 'h')
        .argv;

 // console.log(args);

 geoCode.getCodeAddress(args.address, (errorMessage , result) => {
     if (errorMessage){
       console.log(errorMessage);
     } else {
       console.log(JSON.stringify(result, undefined , 2));
     }
 });
 