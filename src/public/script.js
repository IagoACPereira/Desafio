const listaProduto = document.querySelector('#listaProduto')
const maxTentativas = 4
const cards = document.querySelectorAll('li')
const cardsIcones = document.querySelectorAll('li .bi')
const cardsTextos = document.querySelectorAll('li h3')

let tentativas = 0
const acertos = []
let acertou = 0

function selecaoCard(id) {
    
    const encontrarAcerto = acertos.findIndex((acerto) => {
        return cardsTextos[id].innerHTML  == acerto
    })
    
    if(encontrarAcerto != -1) {
        acertou++
    }
    
    acertos.push(cardsTextos[id].innerHTML)
    
    if(acertou == 2) {
        let endPoint = acertos[acertos.length - 1].split(' ').join('-').toLowerCase()
        
        setTimeout(() => {
            location.href = `${endPoint}`
        }, 1000)
    }
    
    tentativas++
    if(tentativas  == maxTentativas) {
        setTimeout(() => {
            location.href = 'errou'
        }, 1000)
    }

    cardsIcones[id].className += ' icone'
    cardsTextos[id].className += ' fonte'
}