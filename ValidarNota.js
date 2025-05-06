/*Exercício 3
Programa classifica se em Aprovado, Recuperação e Reprovado a pratir de uma nota informada, 
utilizando a estrutura de controle if-else */

const prompt = require('prompt-sync')()

let nota = Number(prompt('Digite a nota: '))

if(nota < 0 || nota > 10){
    console.log('Digite uma nota Válida')
    return
}

if (nota >= 6 ){
    console.log('Parabéns, Aprovado.')
}else if(nota >= 4 && nota < 6){
    console.log('Estude mais, você está em Recuperação.')
}else{
    console.log('Reprovado.')
}