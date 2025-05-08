/* Execício 13
 Programa faz uma média aritmética de números digitados até que o usuario digite 1,
 utilizando o loop do...while. */

const prompt = require('prompt-sync')()

let valor = 0
let contador = 0
let numero

do {
   numero = Number(prompt('Digite um numero: (caso queira encerar digite: 0)'))
    
    if(numero !== 0){
       
            valor+= numero
            contador+=1
    }
    
} while (numero !== 0);

if(contador>0){
    console.log('A média é: '+ (valor/(contador)))
    
}else{
    console.log('Não há média a calcular.')

}