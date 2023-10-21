let circulo = document.querySelector(".circulo")
let valor = document.querySelector('.valor')

let valorInicial = 1
let valorFinal = 100

let progresso = setInterval(()=> {
    valorInicial++
    valor.textContent = `${valorInicial}%`
    circulo.style.background = `conic-gradient( #3531f2 ${valorInicial * 3.6}deg , #ededed 0deg)`

    if(valorInicial === valorFinal){
        clearInterval(progresso)
    }

}, 50 )