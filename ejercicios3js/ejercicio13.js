/*EJERCICIO 13
Escribe un programa que le pida al usuario una frase y un número. El programa debe imprimir la frase en la consola el número de veces que ingresó el usuario.

Por ejemplo, si el usuario ingresó la frase "Hola Mundo" y el número 5, el programa debe imprimir "Hola Mundo" 5 veces:

Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo
Hola Mundo*/

const frase=prompt('Ingresa la  frase')
const veces=parseInt(prompt('ingresa un numero'))

for(i=1; i<=veces; i++){
console.log(`${i}:${frase}`)
}

