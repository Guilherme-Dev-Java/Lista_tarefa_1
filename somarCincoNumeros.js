/* Execício 11
 Programa realiza a soma de 5 numeros digitados e apresenta a soma total,
 utilizando o loop for. */

const prompt = require('prompt-sync')()

let soma = 0

for(let i = 0; i < 5 ; i++){
    let numero = Number(prompt('Digite um numero: '))
    soma +=numero
}

console.log('O valor da soma é: ' + soma)
