const fs = require('fs')

class Controller {
  static inicio = (req, res) => {
    res.status(200).render('inicio.ejs')
  }

  static jogo = (req, res) => {
    const produtos = JSON.parse(fs.readFileSync('./src/config/database.json', 'utf8'))

    console.log(produtos);
    
    res.status(200).render('jogo.ejs', {produtos})
  }

  static tv = (req, res) => {
    res.status(200).render('tv.ejs')
  }

  static internet = (req, res) => {
    res.status(200).render('internet.ejs')
  }

  static smartphone = (req, res) => {
    res.status(200).render('smartphone.ejs')
  }

  static errou = (req, res) => {
    res.status(200).render('errou.ejs')
  }
}

module.exports = Controller