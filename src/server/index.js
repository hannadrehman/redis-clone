const express = require('express')
const morgan = require('morgan')
const setupStore = require('./store')

function start() {
  setupStore()
  var app = express()
  app.use(express.urlencoded({ extended: false }))
  app.use(express.json())
  app.use(morgan('combined'))

  app.get('/get', (_, res) => {
    res.send('get works')
  })
  app.post('/set', (_, res) => {
    res.send('set works')
  })
  app.get('*', (_, res) => {
    res.status(400)
    res.send({})
  })
  app.listen(9019, function (err) {
    if (err) console.log(err)
    console.log('Server listening on PORT', 9019)
  })
}

module.exports = start
