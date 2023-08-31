const configApp = app => {
  const router = require('./routes/index.js')
  const express = require('express')

  app.use(
    express.static('./src/public'),
    router
  )
}

module.exports = configApp