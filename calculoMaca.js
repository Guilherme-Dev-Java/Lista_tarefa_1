/* Execício 7
 Programa verifica quantidade de maças compradas e calcula seu valor, 
usaremos if-else para solucionar */

const prompt = require('prompt-sync')()

let qtdMaca = Number(prompt('Digite a quantidade de Maças: '))
let valorTotal = 0

if (qtdMaca < 12){

    valorTotal = qtdMaca * 0.3
    console.log('O valor total da compra é: R$' + valorTotal.toFixed(2) )
    
}else {
    
    valorTotal = qtdMaca * 0.25
    console.log('O valor total da compra é: R$' + valorTotal.toFixed(2) )
    
}
