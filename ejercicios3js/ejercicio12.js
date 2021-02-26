/*Ejercicio 12
Escribe un programa que le pida al usuario ingresar una frase. El programa debe imprimir la frase en la consola 10 veces.

Nota: utiliza un ciclo para imprimir la frase las 10 veces.*/

const frase=prompt('Ingresa una frase')

for(i=1; i<=10; i++){
console.log(i+': '+ frase)
}