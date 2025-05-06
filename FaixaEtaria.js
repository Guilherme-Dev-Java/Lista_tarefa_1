/*Exercício 2 
Programa classifica as faixas etárias em crianças, adolescentes, adultos e idoso a partir de uma data informada, 
utilizando a estrutura de controle if-else */

const prompt = require('prompt-sync')()

const dataDigitada = prompt('Digite sua data de nascimento: (Ex.: 1957-05-30) ')
const dataNascimento = new Date(dataDigitada) 
const dataAtual = new Date()

dataAtual.setHours(0, 0, 0, 0)

if(dataNascimento > dataAtual){
    console.log('Erro: A data de nascimento não pode ser maior que a data atual.')
    return;
}

let idade = Math.floor ((dataAtual.getTime() - dataNascimento.getTime()) / (1000 * 60 * 60 * 24 * 365.25))

    if(!isNaN(idade) && idade >= 0 && idade < 12){
        console.log ('Idade: ' + idade + '. Sua idade está na faixa etária: Criança, compreendida entre 0 e 11 anos.')
    }else if(!isNaN(idade) && idade >= 12 && idade < 18){
        console.log ('Idade: ' + idade + '. Sua idade está na faixa etária: Adolescente, compreendida entre 12 e 17 anos.')
        }else if(!isNaN(idade) && idade >= 18 && idade < 65){
        console.log ('Idade: ' + idade + '. Sua idade está na faixa etária: Adulto, compreendida entre 18 e 64 anos.')
        }else if(!isNaN(idade) && idade >= 65){
        console.log ('Idade: ' + idade + '. Sua idade está na faixa etária: Idoso, pessoas com 65 ano ou mais.')
       }else{
        console.log('Erro: Formato ou data inválida')
       }