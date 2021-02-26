/*Ejercicio 33
Escribe una función llamada capitalizar que reciba una cadena y capitalice cada palabra de la cadena.

Nota: puedes asumir que cada palabra está separada por espacio.
 */

const capitalizar=(word)=>{
word=word.split(' ')

for(i=0; i<=word.length -1; i++ ){
  if(word[i]!=='' ){
 word[i]=word[i].replace(word[i][0],  word[i][0].toUpperCase(1))
}
}
return word.join(' ')
}


// código de prueba
console.log(capitalizar("pedro perez")) // "Pedro Perez"
console.log(capitalizar("make it real")) // "Make it Real"


