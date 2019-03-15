var biblioteca = ["algoritmo", "programacao", "codigo", "notebook", "python", "java"] //palavras possiveis
var quant = biblioteca.length - 1 //quantidade de palavras na biblioteca
var posicao = Math.round(Math.random()*quant)
var palavra = biblioteca[posicao]
var tamPalavra = palavra.length
var letras = []
var acertos
var erros
var erroMax = 7
var boneco = []
var acertou = false
var jogando = false

function definirLetras(quantLetras) {
    var obj
    for(var i = 0; i < 15; i++) {
        obj = document.getElementById("letra"+i).value="" //remover as letras da jogada anterior
        obj = document.getElementById("letra"+i).style.display="none"
    }
    for(var i = 0; i < quantLetras; i++) {
        obj = document.getElementById("letra"+i).style.display="inline-block" //mostrar apenas a quantidade de caixas de acordo com a quantidade de letras
    }
}

function iniciar() {
    jogando = true
    jog = document.getElementById("letraEscolhida")
    jog.value=""
    jog.focus()
    acertos = 0
    erros = 0
    acertou = false
    document.getElementById("letrasErradas").innerHTML="Letras Testadas: "
    posicao = Math.round(Math.random()*quant)
    palavra = biblioteca[posicao]
    tamPalavra = palavra.length
    definirLetras(tamPalavra) //quantidade de espaços que devem aparecer na tela para a palavra ser escrita
    document.getElementById("divMsg").innerHTML=" " //olhar de que parte é essa ID
    boneco[0] = document.getElementById("cabeca")
    boneco[1] = document.getElementById("bracoE")
    boneco[2] = document.getElementById("bracoD")
    boneco[3] = document.getElementById("tronco")
    boneco[4] = document.getElementById("pernaE")
    boneco[5] = document.getElementById("pernaD")
    boneco[6] = document.getElementById("cabeca2")
    //document.getElementById("cabeca").src="cabeca1.png"
    for(var i = 0; i < 7; i++) {
        boneco[i].style.display="none"
    }
}

function testarLetra() {
    jog = document.getElementById("letraEscolhida")
    jog.focus()
    if (jog.value == "") {
        alert("Digite uma letra!")
    } else {
        if (jogando) {
            var letra
            var pesquisa
            letra = jog.value
            jog.value = ""
            pesquisa = palavra.match(letra)
            acertou = false
            while(pesquisa != null) {
                var letraTmp = palavra.search(letra)
                document.getElementById("letra"+letraTmp).value = letra
                palavra = palavra.replace(letra, "0")
                acertos++
                pesquisa = palavra.match(letra)
                acertou = true
            }
            if (!acertou) {
                document.getElementById("letrasErradas").innerHTML+=letra.toUpperCase()
                //boneco[erros].style.display="block"
                if (erros < 6) {
                    //boneco[erros - 1].style.display="none"
                    boneco[erros].style.display="inline-block"
    
                } else {
                    for(var i = 0; i < 6; i++) {
                        boneco[i].style.display="none"
                    }
                    boneco[6].style.display="inline-block"
                    document.getElementById("divMsg").innerHTML="DEU RUIM!"
                    jogando = false
                }
                erros++
            }
            if (acertos == tamPalavra) {
                document.getElementById("divMsg").innerHTML="GANHOU!"
                jogando = false
            }
        }
    }
}

function dica() {
    alert(palavra)
    jog.focus()
}
window.addEventListener("load", iniciar)