/* Execício 12
 Programa exibe a tabuada de um numero digitado pela usuario,
 utilizando o loop for. */

const prompt = require('prompt-sync')()

let numero = Number(prompt('Digite um numero: '))

console.log('### Tabuada de Adição ###')
for(let i = 1; i <= 10 ; i++){
    
    console.log( i + ' + ' + numero +' = '+ (i + numero))
    
}

console.log('### Tabuada de Multiplicação ###')
for(let i = 1; i <= 10 ; i++){
    
    console.log( i + ' X ' + numero +' = '+ (i * numero))
    
}
