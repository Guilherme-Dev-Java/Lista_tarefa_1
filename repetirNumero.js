/* Execício 10
 Programa repete um numero digitado 10 vezes,
 utilizando o loop for. */

const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um numero: '))

for(let i = 1; i <= 10 ; i++){
    console.log(i +': ' +numero)
}