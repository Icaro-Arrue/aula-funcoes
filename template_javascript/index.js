console.log("Funções")

/*
leitura de codigo 1.
a. 
10
50

b. nada apareceria no console

2.
a. essa função lerá o texto que for atribuído, 
o retornará em letras minúsculas (p melhor leitura/execução do código)
 e retornará um booleano true caso inclua a palavra cenoura (ou false se n incluir)

 b.
 i. eu gosto de cenoura true
 cenoura é bom pra vista true
 cenouras crescem na terra false

*/
//escrita de código 1
function escreveFrase () {
    let nome = "Ícaro"
    let idade = 17
    let cidade = "São Leopoldo"
    let profissao = "estudante"
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

escreveFrase()

const uneFrase = function(nome, idade, cidade, profissao) {
    console.log(`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissao}`)
}

const minhaFrase = uneFrase("Rafael", 36, "São Leopoldo", "professor")

//2
let calculaSoma = (numero1, numero2) => {
    return numero1 + numero2
}

console.log(calculaSoma(2, 3))
  
let maiorOuNao = (numero1, numero2) => {
    return numero1 >= numero2
}

console.log(maiorOuNao(2, 3))

const parOuImpar = function(numero) {
    let divisão = numero % 2
    let par = divisão == 0
    console.log(par)
}

const parOuNao = parOuImpar(9)


const caracteresFrase = function(texto) {
    let tamanho = texto.length
    console.log(tamanho)
}

const fraseUsuario = caracteresFrase("sou lindo")

let calculoUsuario = prompt("insira um numero")
let calculoUsuario2 =  prompt("... e insira mais um para calcular")



const somando = function(numero1, numero2) {
    let soma = Number(numero1) + Number(numero2)
    console.log(`Adição: ${soma}`)
}

const substraindo = function(numero1, numero2) {
    let subtracao = Number(numero1) - Number(numero2)
    console.log(`Subtração: ${subtracao}`)
}

const dividindo = function(numero1, numero2) {
    let divisao = Number(numero1) / Number(numero2)
    console.log(`Divisão: ${divisao}`)
}

const multiplicando = function(numero1, numero2) {
    let vezes = Number(numero1) - Number(numero2)
    console.log(`Multiplicação: ${vezes}`)
}


const teste = somando(calculoUsuario, calculoUsuario2)
const teste2 = substraindo(calculoUsuario, calculoUsuario2)
const teste3 = dividindo(calculoUsuario, calculoUsuario2)
const teste4 = multiplicando(calculoUsuario, calculoUsuario2)