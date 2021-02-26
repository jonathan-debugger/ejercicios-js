/* EJERCICIO 15
Escribe un programa para la consola que le pida al usuario dos números e imprima en la consola los números en ese rango. Por ejemplo, si el usuario ingresa 5 como primer número y 10 como segundo número, el programa debe imprimir:

5
6
7
8
9
10
Nota 1: Puedes asumir que el primer número siempre va a ser menor o igual que el segundo.

Nota 2: Fíjate que se imprimen también los números en los límites, en el ejemplo el 5 y el 10.*/


const numero1=Number(prompt('Ingresa el primero numero'))

const numero2=Number(prompt('Ingresa el segundo numero'))

for(i=numero1;  i<=numero2;  i++){
  console.log(i)
}