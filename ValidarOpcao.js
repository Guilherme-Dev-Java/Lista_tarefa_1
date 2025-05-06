/*Exercício 4
Programa válida uma opção em um menu, 
utilizando a estrutura de controle Swith-case */

const prompt = require('prompt-sync')()

console.log('#### Menu ####')
console.log('1. Cadastro de Usuário')
console.log('2. Cadastro de Produto')
console.log('3. Sair')

let opcao = Number(prompt('Digite a opção escolhida: '))

switch(opcao){
    case  1:
        console.log ('Cadastrando o Usuário...')
        break
    case 2:
        console.log ('Cadastrando o Produto...')
        break
    case 3:
        console.log ('Saindo...')
        break
    default:
        console.log('Digite uma opção válida.')
}