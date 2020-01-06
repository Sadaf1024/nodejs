const request = require('request')

const geoCode = (address, callback) => {

    const urlMapBox = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1Ijoic2FkYWZhbGkiLCJhIjoiY2s0bzBybXNzMTlkazNrbjU2Y2JmdzhveSJ9.htxb-ebEP43oG23z5TaQQg&limit=1'
    request({url: urlMapBox, json: true},(error, responce)=>{
    if(error){
        callback('Unable to connect to Location Service!', undefined)
    }else if(responce.body.features.length === 0){
        callback('Unable to Find Location. Try another Search', undefined)
    }else{
        callback(undefined,{
            latitude: responce.body.features[0].center[1],
            longitude: responce.body.features[0].center[0],
            location: responce.body.features[0].place_name 
        })
    }
    })
}

module.exports = geoCode