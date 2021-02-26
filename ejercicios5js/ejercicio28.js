/*Ejercicio 28 (Bonus)
Escribe un programa que le pida dos frases al usuario e imprima los caracteres que tienen en común. Si no tienen caracteres en común debe imprimir "No se encontraron caracteres en común".

Ejemplo 1:

Ingresa frase 1> German
Ingresa frase 2> Gabriela
Los caracteres en común son: G, e, r, a
Ejemplo 2:

Ingresa frase 1> Hola
Ingresa frase 2> Bye
No se encontraron caracteres en común*/

let frase1=prompt('Ingresa frase 1').toLowerCase()
let frase2=prompt('Ingresa frase 2').toLowerCase()
let frase=''

for(i=0;  i<frase1.length; i++){
  for(j=0;  j<frase2.length; j++ ){
  if(frase1[i].includes(frase2[j]) && frase1[i]!=' ' ){
    frase+=[frase1[i]]
  }
  }
}

if(frase===''){
  console.log('No se encontraron caracteres en comun')
}else{ 
frase=frase.split('')
total = [...new Set(frase)]//con el metodo  set evito  que traiga resultados  duplicados
console.log(`los caracteres en comun son: ${total.join(', ')}`)
}