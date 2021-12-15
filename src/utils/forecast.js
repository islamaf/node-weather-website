const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=8e698d0e98a429384ff0274a5fc056b5&query=' + longitude + ',' + latitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Weatherstack!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, `${body.current.weather_descriptions[0]}. It is currently ${body.current.temperature} degrees and feels like ${body.current.feelslike} degrees outside.\nHumidity is ${body.current.humidity}`)
        }
    })
}

module.exports = forecast