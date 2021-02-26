/* 
Ejercicio 26
Escribe un programa que le pida una frase al usuario y capitalice cada palabra. Por ejemplo:

Ingresa una frase> esta es una prueba
Esta Es Una Prueba*/
//capitalize

let posicion=' '
let frase=prompt('ingresa una frase')
console.log(frase=frase.split(/ /g))
let minus=[],mayus=[]

for(i=0; i<frase.length; i++){

//minus[i]=frase[i].charAt(0)
//mayus[i]=minus[i].toUpperCase()
frase[i]=frase[i].replace(frase[i][0],mayus[i])

posicion+=minus[i]+' '

}

console.log(posicion)



