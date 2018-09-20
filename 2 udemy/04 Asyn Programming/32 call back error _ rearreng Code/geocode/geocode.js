
var request = require('request');

var getCodeAddress = (address, callback) => {

    var encripAddress =  encodeURIComponent(address) ; 

    request({
      url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encripAddress}`,   //pallabi%20mirpus%20Dhaka',
      //url : 'http://maps.googleapis.com/maps/api/geocode/json?address=1301 lombard street philadelphia',
      json : true
    }, (error , response , body ) => {
    
      if (error){
        callback('Unable to Connect Google Server');
      } else if (body.status === 'ZERO_RESULTS'){
        callback(' Can\'t find location ');
      } else  if (!error && body.status === 'OK'){
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        })
      }
    });
}

module.exports  = {
    getCodeAddress ,
}
