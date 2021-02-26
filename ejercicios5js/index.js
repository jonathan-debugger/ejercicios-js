/* 
Ejercicio 26
Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba*/
//capitalize

let posicion=' '
let frase=prompt('ingresa una frase')
frase=frase.split(' ')


for(i=0; i<frase.length; i++){
if(frase[i]!==''){
frase[i]=frase[i].replace(frase[i][0],frase[i][0].toUpperCase())
}
}
console.log(frase.join(' '))



