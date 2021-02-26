/*Ejercicio 22
Completa el siguiente programa e imprime la cantidad de unos (1) que haya en el arreglo:

const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0, 1, 1]
El resultado debería ser el siguiente:

11
Nota: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo, cambia el arreglo original para verificar que funcione con otras combinaciones de ceros y unos.*/
const nums = [1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 1, 0, 1, 0,0,0,0,0,0,0,0,0, 1, 1]
let array=[]
let count=0
for(j=0;  j<nums.length; j++){
if(nums[j]!=0){
 array[count++]=nums[j]

}

}
console.log(array.length)
