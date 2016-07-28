'use strict'

var visualizr = require('./index')({
  apiKey: '<PLACE YOUR API KEY HERE>',
})

const reading = {
  metricName: '<YOUR METRIC NAME>',
  millis: Number(new Date()),
  value: 1
}

visualizr(reading, (err, data) => {
  if (err) {
    console.log('ERROR', err)
  } else {
    console.log('DATA', JSON.stringify(data, null, 2))
  }
})
