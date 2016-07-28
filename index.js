'use strict'

var https = require('https')

module.exports = function (config) {
  if (!config) {
    config = {}
  }

  return function send (datametric, callback) {
    // For now, add the apiKey to the datametric object and this will be the entire POST body.
    datametric.apiKey = config.apiKey
    datametric.millis = datametric.millis || Number(new Date())

    var body = JSON.stringify(datametric)

    var options = {
      host: config.host || 'www.visualizr.co.uk',
      port: config.port || 443,
      path: '/datametric',
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Content-Length': Buffer.byteLength(body)
      }
    }

    var postRequest = https.request(options, function (response) {
      var data = ''
      // response.setEncoding('utf8')
      response.on('error', function (error) {
        callback(error)
      })
      response.on('data', function (chunk) {
        data += chunk
      })
      response.on('end', function () {
        if (response.headers['content-type'].match(/^application\/json/)) {
          data = JSON.parse(data)
        }
        callback(null, data)
      })
    })

    postRequest.on('error', function (error) {
      callback(error)
    })

    // post the data
    postRequest.write(body)
    postRequest.end()
  }
}
