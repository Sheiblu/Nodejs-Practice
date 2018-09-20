
const request = require('request');

var findAddressInfo = (address) => {
    return new Promise((resolve, reject) => {

        var encripAddress =  encodeURIComponent(address) ; 
        request({
            url : `http://maps.googleapis.com/maps/api/geocode/json?address=${encripAddress}`,   //pallabi%20mirpus%20Dhaka',
            json : true
          }, (error , response , body ) => {
          
            if (error){
                reject('Unable to Connect Google Server');
            } else if (body.status === 'ZERO_RESULTS'){
                reject(' Can\'t find location ');
            } else  if (!error && body.status === 'OK'){
                resolve({
                  address: body.results[0].formatted_address,
                  latitude: body.results[0].geometry.location.lat,
                  longitude: body.results[0].geometry.location.lng
              })
            }
          });
    });
};


findAddressInfo("pallabi mirpus Dhaka").then((result) => {
    console.log("Result : " , JSON.stringify(result, undefined , 2));
}).catch((error) => {
    console.log("Error : " , error);
});
