const express = require('express')
const configApp = require('./src/app.js')

const porta = 8080
const app = express()

configApp(app)

app.listen(porta, () => console.log(`Serividor escutando porta ${porta}`))