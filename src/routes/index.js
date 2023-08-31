const express = require('express')
const Controller = require('../controllers/index.js')

const router = express.Router()

router.get('/', Controller.inicio)
router.get('/jogo', Controller.jogo)
router.get('/tv', Controller.tv)
router.get('/smartphone', Controller.smartphone)
router.get('/banda-larga', Controller.internet)
router.get('/errou', Controller.errou)

module.exports = router