const geoCode = require('./Utils')
const forecast = require('./forcast')



geoCode('Karachi',(error, data) => {

    console.log('',data)

    forecast(data.longitude, data.latitude, (error , Fordata) => {
        console.log('', Fordata)
    })
      
})


