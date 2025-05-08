/* Execício 6
 Programa válida se as medidas dos lados são realmente triângulo, 
e qualifica com iósceles, escaleno ou equilátero */

const prompt = require('prompt-sync')()

let ladoA = Number(prompt('Digite o lado A: '))
let ladoB = Number(prompt('Digite o lado B: '))
let ladoC = Number(prompt('Digite o lado C: '))

if (ladoA < (ladoB + ladoC) && ladoB <(ladoA + ladoC) && ladoC < (ladoA + ladoB)){

    if(ladoA === ladoB && ladoB === ladoC && ladoA === ladoC){
        console.log('Esse é um triãngulo equilatero.')
    }else if(ladoA !== ladoB && ladoA !== ladoC && ladoB !== ladoC){
        console.log('Esse trinângulo é escaleno.')
    }else{
        console.log('Esse trinângulo é isósceles.')
    }

}else {
    console.log('Os Lados não corresponde a um triângulo!')
}
