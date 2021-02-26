/*Ejercicio 34
Escribe una función llamada promedio que reciba un arreglo de números y retorne el promedio los elementos.
*/
function promedio(array){
let  suma=''
for(i=0;  i<array.length;  i++){

suma=Number(suma+array[i])
}
return suma/array.length
}

// código de prueba
console.log(promedio([1, 2, 3, 4])) // 2.5
console.log(promedio([7, 8, 9])) // 8
console.log(promedio([300, 100])) // 200