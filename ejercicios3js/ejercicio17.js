/*Ejercicio 17
Escribe un programa que piense un número de forma aleatoria y le pida al usuario que lo trate de adivinar (como en uno de los ejercicios anteriores). La diferencia es que esta vez el usuario puede intentar indefinidamente hasta que encuentre el número.

Comparte tu respuesta en este enlace.*/


var  numero=Number(prompt('Intenta adivinar el numero'))

let  numAleatorio=Math.floor(Math.random()*10+1)

while(numero!=numAleatorio){
numero=Number(prompt(`Intenta nuevamente: ${numero}, no era  el numero`))

}
console.log(`Lo lograste ${numero}, es el numero` )