var secao = document.getElementById('conteudo')
var pontuacao = document.getElementById('pontos')
var pontos = 0
pontuacao.textContent = pontos
criarvariaveis()

function criarvariaveis(){
    papel = document.getElementById('papel')
    tesoura = document.getElementById('tesoura')
    pedra = document.getElementById('pedra')
    clicar()
}

var showststs = '<div class="status"><p class="status__gamer--1">Você</p><p class="status__gamer--2">Computador</p></div>'
var botaoperdeu = '<div class="play-again"><p class="play-again__text">Você Perdeu!</p><button class="play-again__button" id="recomecar">Tentar novamente</button></div>'
var botaoganhou = '<div class="play-again"><p class="play-again__text">Você Ganhou!</p><button class="play-again__button" id="recomecar">Tentar novamente</button></div>'
var botaoempatou = '<div class="play-again"><p class="play-again__text">Empate!</p><button class="play-again__button" id="recomecar">Tentar novamente</button></div>'

function cliqueipapel(){
    secao.className = 'conteudo__2'
    var escolher = Math.round(Math.random() * 10)
    if(escolher % 3 == 0){
        secao.innerHTML = showststs + papel.outerHTML + botaoperdeu + tesoura.outerHTML
        perdeu()
    }
    if(escolher % 3 == 1){
        secao.innerHTML = showststs + papel.outerHTML + botaoganhou + pedra.outerHTML
        ganhou()
    }
    if(escolher % 3 == 2){
        secao.innerHTML = showststs + papel.outerHTML + botaoempatou + papel.outerHTML
    }
}

function cliqueitesoura(){
    secao.className = 'conteudo__2'
    var escolher = Math.round(Math.random() * 10)
    if(escolher % 3 == 0){
        secao.innerHTML =  showststs + tesoura.outerHTML + botaoempatou + tesoura.outerHTML
    }
    if(escolher % 3 == 1){
        secao.innerHTML =  showststs + tesoura.outerHTML + botaoperdeu + pedra.outerHTML
        perdeu()
    }
    if(escolher % 3 == 2){
        secao.innerHTML =  showststs + tesoura.outerHTML + botaoganhou + papel.outerHTML
        ganhou()
    }
}

function cliqueipedra(){
    secao.className = 'conteudo__2'
    var escolher = Math.round(Math.random() * 10)
    if(escolher % 3 == 0){
        secao.innerHTML =  showststs + pedra.outerHTML + botaoganhou + tesoura.outerHTML
        ganhou()
    }
    if(escolher % 3 == 1){
        secao.innerHTML =  showststs + pedra.outerHTML + botaoempatou + pedra.outerHTML
    }
    if(escolher % 3 == 2){
        secao.innerHTML =  showststs + pedra.outerHTML + botaoperdeu + papel.outerHTML
        perdeu()
    }
}

function voltaraonormal(){
    secao.className = 'conteudo__1'
    secao.innerHTML = papel.outerHTML + pedra.outerHTML + tesoura.outerHTML
    criarvariaveis()
}


function botaocriado(){
    var recomecar = document.getElementById('recomecar')
    recomecar.addEventListener('click', voltaraonormal)
}


function clicar(){
    papel.addEventListener('click', ()=>{
    criarvariaveis()
    cliqueipapel()
    botaocriado()
    })

    tesoura.addEventListener('click', ()=>{
    cliqueitesoura()
    botaocriado()
    })
    pedra.addEventListener('click', ()=>{
    cliqueipedra()
    botaocriado()
    })
}

function ganhou(){
    pontos = pontos + 1
    pontuacao.textContent = pontos
}

function perdeu(){
    pontos = pontos - 1
    if(pontos < 0 ){
        pontos = 0
    }
    pontuacao.textContent = pontos
}