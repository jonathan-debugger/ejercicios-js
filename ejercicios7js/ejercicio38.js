/*Ejercicio 38
Escribe una función llamada descifrar que reciba un string y un objeto. Utiliza las propiedades del objeto para reemplazar los caracteres de la cadena y retorna el resultado:*/

const descifrar=(word,obj)=>{
word=word.split('')
keys=Object.keys(obj)

for(i=0; i<word.length; i++ ){
  for(j=0; j<keys.length; j++ ){
 

    if(word[i]==keys[j]){
       word.splice(i,1,obj[keys[j]])
       
    }
  }
}
return word.join('')

/*   tambien es  posible de esta forma
for(let key in obj){
word=word.replace(new RegExp(key,'g'),obj[key])
}
return word*/
}




// código de prueba
console.log(descifrar("h0l4", { 0: "o", 4: "a" })) // "hola"
console.log(descifrar("pyrmizo", { y: "e", z: "s" })) // "permiso"
console.log(descifrar("igual", { h: "n" })) // "igual"

