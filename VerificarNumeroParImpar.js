/* Execício 1
 Programa verifica se o número informado é Par ou Impar, 
utilizando a estrutura de controle if-else */

const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um número: '))

if (numero % 2 === 0){
    console.log('O número ' + numero + ' é par.')
}else{
    console.log('O número ' + numero + ' é impar.')
}