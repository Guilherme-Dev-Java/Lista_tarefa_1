/* Execício 8
 Programa ordena 2 valores por ordem crscente, considerando que os valores nao serão iguais. */

const prompt = require('prompt-sync')()

let valor1 = Number(prompt('Digite o primeiro valor: '))
let valor2 = Number(prompt('Digite o segundo valor: '))

if (valor1 < valor2){

    console.log(valor1 + ', ' + valor2 )
    
}else {
    
    console.log(valor2 +', ' + valor1 )
    
}