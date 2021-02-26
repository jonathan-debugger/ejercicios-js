
/*Ejercicio 29
Escribe una función llamada suma que reciba dos números y retorne la suma de los dos números.*/

// escribe la función suma acá
 const suma=(n1,n2)=>{
   return n1+n2
 }
 const n1=Number(prompt('Ingrese el primer numero'))
 const n2=Number(prompt('Ingrese el segundo numero'))

// código de prueba, verifica que aparezcan los valores correctos en la consola
console.log('La suma de los numeros es:'+suma(n1,n2))
console.log(suma(1, 2)) // 3
console.log(suma(0, 0)) // 0
console.log(suma(245, 923)) // 1168
