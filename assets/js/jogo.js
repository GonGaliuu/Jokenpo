var secao = document.getElementById('conteudo')
var papel = document.getElementById('papel')
var tesoura = document.getElementById('tesoura')
var pedra = document.getElementById('pedra')

papel.addEventListener('click', ()=>{
    tesoura.remove()
    pedra.remove()
    var escolher = Math.round(Math.random() * 10) 
    if (escolher % 3 == 0){
        papel.remove()
        secao.innerHTML = papel.outerHTML + tesoura.outerHTML
    }
    else if (escolher % 3 == 1){
        papel.remove()
        secao.innerHTML = papel.outerHTML + papel.outerHTML
    }
    else if (escolher % 3 == 2){
        papel.remove()
        secao.innerHTML = papel.outerHTML + pedra.outerHTML
    }
})

tesoura.addEventListener('click', ()=>{
    papel.remove()
    pedra.remove()
    var escolher = Math.round(Math.random() * 10) 
    if (escolher % 3 == 0){
        tesoura.remove()
        secao.innerHTML = tesoura.outerHTML + tesoura.outerHTML
    }
    else if (escolher % 3 == 1){
        tesoura.remove()
        secao.innerHTML = tesoura.outerHTML + papel.outerHTML
    }
    else if (escolher % 3 == 2){
        tesoura.remove()
        secao.innerHTML = tesoura.outerHTML + pedra.outerHTML
    }
})

pedra.addEventListener('click', ()=>{
    tesoura.remove()
    papel.remove()
    var escolher = Math.round(Math.random() * 10) 
    if (escolher % 3 == 0){
        pedra.remove()
        secao.innerHTML = pedra.outerHTML + tesoura.outerHTML
    }
    else if (escolher % 3 == 1){
        pedra.remove()
        secao.innerHTML = pedra.outerHTML + papel.outerHTML
    }
    else if (escolher % 3 == 2){
        papel.remove()
        secao.innerHTML = pedra.outerHTML + pedra.outerHTML
    }
})