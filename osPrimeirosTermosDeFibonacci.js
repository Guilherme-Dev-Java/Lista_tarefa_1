/* Execício 15
 Programa faz o calculo dos 10 primeiros termos de Fibonacci,
 utilizando o loop For. */

let a = 0
let b = 1
let temp = 0

 console.log(a)
 console.log(b)
 
 for (let i = 2; i <= 10; i++) {
    temp = a + b
    console.log(temp)
    
    a = b
    b = temp
    
 }