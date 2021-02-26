/* 
Ejercicio 27
Escribe un programa que le pida una frase al usuario e imprima cada palabra en una nueva línea. Por ejemplo:

Ingresa una frase> esta es una prueba
esta
es
una
prueba
Nota: Las palabras se separan por espacio.
*/


let frase=prompt('ingresa una frase')
frase=frase.split(/ /g)
for(i=0; i<frase.length; i++){
  
console.log(frase[i])
}
