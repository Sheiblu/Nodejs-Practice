
var request = require('request');

request({
  url : 'http://maps.googleapis.com/maps/api/geocode/json?address=pallabi%20mirpus%20Dhaka',
  //url : 'http://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard street philadelphia',
  json : true
}, (error , response , body ) => {
    console.log(`Address :  ${body.results[0].address_components[4] ['types'][1]}`);
});