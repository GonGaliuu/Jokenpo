var secao = document.getElementById('conteudo')
var papel = document.getElementById('papel')
var tesoura = document.getElementById('tesoura')
var pedra = document.getElementById('pedra')
var botaoperdeu = '<div class="play-again"><p class="play-again__text">Você perdeu!</p><button class="play-again__button" id="recomecar">Tentar novamente</button></div>'
var botaoganhou = '<div class="play-again"><p class="play-again__text">Você Ganhou!</p><button class="play-again__button" id="recomecar">Tentar novamente</button></div>'
var botaoempatou = '<div class="play-again"><p class="play-again__text">Empate!</p><button class="play-again__button" id="recomecar">Tentar novamente</button></div>'

function cliqueipapel(){
    secao.className = 'conteudo__2'
    var escolher = Math.round(Math.random() * 10)
    if(escolher % 3 == 0){
        secao.innerHTML = papel.outerHTML + botaoperdeu + tesoura.outerHTML
    }
    if(escolher % 3 == 1){
        secao.innerHTML = papel.outerHTML + botaoganhou + pedra.outerHTML
    }
    if(escolher % 3 == 2){
        secao.innerHTML = papel.outerHTML + botaoempatou + papel.outerHTML
    }
}

function cliqueitesoura(){
    secao.className = 'conteudo__2'
    var escolher = Math.round(Math.random() * 10)
    if(escolher % 3 == 0){
        secao.innerHTML = tesoura.outerHTML + botaoempatou + tesoura.outerHTML
    }
    if(escolher % 3 == 1){
        secao.innerHTML = tesoura.outerHTML + botaoperdeu + pedra.outerHTML
    }
    if(escolher % 3 == 2){
        secao.innerHTML = tesoura.outerHTML + botaoganhou + papel.outerHTML
    }
}

function cliqueipedra(){
    secao.className = 'conteudo__2'
    var escolher = Math.round(Math.random() * 10)
    if(escolher % 3 == 0){
        secao.innerHTML = pedra.outerHTML + botaoganhou + tesoura.outerHTML
    }
    if(escolher % 3 == 1){
        secao.innerHTML = pedra.outerHTML + botaoempatou + pedra.outerHTML
    }
    if(escolher % 3 == 2){
        secao.innerHTML = pedra.outerHTML + botaoperdeu + papel.outerHTML
    }
}

function voltaraonormal(){
    secao.className = 'conteudo__1'
    secao.innerHTML = papel.outerHTML + pedra.outerHTML + tesoura.outerHTML
}


function botaocriado(){
    var recomecar = document.getElementById('recomecar')
    recomecar.addEventListener('click', voltaraonormal)
}

papel.addEventListener('click', ()=>{
    cliqueipapel()
    botaocriado()
})

tesoura.addEventListener('click', cliqueitesoura)
pedra.addEventListener('click', cliqueipedra)