/*
Ejercicio 21
Completa el siguiente programa para imprimir los números que sean mayores a 10.

const nums = [1, 23, 5, 8, 40, 12, 2, 67, 24, 9, 39]
// escribe tu código acá
El resultado debería ser el siguiente:

23
40
12
67
24
39
Nota: este ejercicio lo debes hacer con ciclos y sin ayuda de la función filter de JavaScript. Al terminarlo cambia el arreglo original para verificar que funcione con otros números.
 */

const nums = [50,1,2,5,8,7,650,25,10,32,50,1,2,35,4]

for(i=0; i<nums.length; i++){
  if(nums[i]>10){
  console.log(nums[i])
  }

}