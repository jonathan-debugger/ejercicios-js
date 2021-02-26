/*Ejercicio 24
Escribe un programa que le pida una frase al usuario y le muestre el número de caracteres "a" que hay en la frase. Por ejemplo:

Ingresa una frase> Hasta la próxima
La frase tiene 4 caracteres "a"*/

let frase=prompt('Ingresa una frase:')
let cont=0
for(i=0; i<frase.length; i++){
if(frase[i]==='a'){
cont++
}
}
console.log(`La frase tiene ${cont} caracteres`)


