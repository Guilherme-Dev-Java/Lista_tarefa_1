/* Execício 5
 Programa cacula o indice de massa corporal, 
utilizando a estrutura de controle if-else */

const prompt = require('prompt-sync')()

let idade = Number(prompt('Digite sua idade: '))
let altura = Number(prompt('Digite sua altura: ex: 1.75 '))
let peso = Number(prompt('Digite seu peso: '))

let imc = peso / (altura*altura)

console.log('seu IMC é: ' + imc.toFixed(2))

if(imc < 17){
    console.log('Muito abaixo do peso')
}else if(imc >= 17 && imc < 18.5){
    console.log('Muito abaixo do peso')
}else if(imc >= 18.5 && imc < 25){
    console.log('Peso normal')
}else if(imc >= 25 && imc < 30){
    console.log('Acima do peso')
}else if(imc >= 30 && imc < 35){
    console.log('Obesidade I')
}else if(imc >= 35 && imc < 40){
    console.log('Obesidade II (Servera)')
}else if(imc >= 40){
    console.log('Obesidade III (Mórbida)')
}
