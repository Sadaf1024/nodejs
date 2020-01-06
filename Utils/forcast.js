const request = require('request')

const forcast = (Latitude, Longitude, callback) => {

const WeatherUrl = 'https://api.darksky.net/forecast/d2598cadfc1a0e628fef0dce2e3de0d8/'+ Latitude +','+ Longitude

request({url: WeatherUrl, json: true}, (error, responce) =>{
    if(error){
        callback('Error in Internet Connection',undefined)
    }else if(responce.body.error){
         callback('Unable to Find Location', undefined)
    }
    else{
          callback(undefined,'Today weather is '+ responce.body.currently.temperature +' Chance of Rain '+ responce.body.currently.precipProbability)
    }

})
}

module.exports = forcast

