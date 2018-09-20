
var request = require('request');


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

  console.log(args);
 
  var encripAddress =  encodeURIComponent(args.address) ; 

request({
  url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encripAddress}`,   //pallabi%20mirpus%20Dhaka',
  //url : 'http://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard street philadelphia',
  json : true
}, (error , response , body ) => {
    console.log(`Address :  ${body.results[0].address_components[4] ['types'][1]}`);
});