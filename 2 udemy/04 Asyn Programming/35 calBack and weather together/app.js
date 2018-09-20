
const geoCode = require('./geoCode/geoCode');
const weather = require('./weather/weather');

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

 // - 

 geoCode.getCodeAddress(args.address, (errorMessage , result) => {
     if (errorMessage){
       console.log(errorMessage);
     } else {
          
        console.log(" fetching ...............");

       //console.log(JSON.stringify(result, undefined , 2));
       weather.getWeatherInfo(result.latitude, result.longitude , (errorMessage , weatherResult) => {
        if (errorMessage){
          console.log(errorMessage);
        } else {
          //console.log(JSON.stringify(weatherResult, undefined , 2));
          console.log(`It's ${weatherResult.timezone} \nNow Tem : ${weatherResult.temperature} `);
          console.log(`It's feel Like ${weatherResult.apparentTemperature}`);
        }     
      });


     }
 });



 