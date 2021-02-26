/*Ejercicio 7
Escribe un programa que piense un número de forma aleatoria del 1 al 10 y le pida al usuario que lo trate de adivinar. Si el número es correcto debe imprimir en la consola "Felicitaciones, ese era!", de lo contrario debe imprimir "Lo siento, intenta nuevamente!"*/


//Math.random devuelve un numero aleatorio entre 0,1 ejemplo:
//0.824854465 0.2006545185040

let numAleatorio=parseInt(Math.random()*10+1)
let numUser=prompt('Ingrese un numero  de 1 a 10')
if(numAleatorio==numUser){
console.log('Adivinaste el numero')
}else{
  console.log('intenta de nuevo'+ '  el numero era:' + numAleatorio)
}

