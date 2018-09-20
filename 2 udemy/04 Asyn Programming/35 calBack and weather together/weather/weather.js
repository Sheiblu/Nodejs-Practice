const request = require('request');

var getWeatherInfo = (latitude, longitude, callback) => {

    request ({
        url: `https://api.darksky.net/forecast/24e774234ce462f2cabe62c84c48c497/${latitude},${longitude}`,
        json: true
    }, (error, response , body) => {

        if (error) {
            callback('Unable to connect ForeCast Server');
        } else if (response.statusCode === 400){
            callback('Unable to fetch Weather');
        } else if (!error && response.statusCode === 200){
            callback(undefined, {
                timezone: body.timezone,
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports = {
    getWeatherInfo,
}