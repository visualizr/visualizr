# visualizr
Small javascript module for sending data metrics to the visualizr service

visualizr is a tool for allowing you to make sense of your data metrics by recording your data and presenting it in a way that allows you to easily spot patterns. This small module is used to allow you to send you data metrics to the visualizr service.

Once a metric is logged it is viewable at the main [visualizr](http://www.visualizr.co.uk) site.

__Installation__

To install the latest version:

`npm install --save visualizr`

__Usage__

Here is a simple example

    const config = {
        apiKey: 'test'
    }

    const visualizr = require('visualizr')(config)

    const reading = {
        metricName: 'readme',
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

When requiring visualizr you must provide a `config` object. Currently you are only required to provide an apiKey, which will be used to store your data metric correctly and used by the visualizr engine to generate charts.

The call `visualizr([data metric], [callback])` will send the data metric and callback will be executed when the data metric is successfully stored or if there is an error.
