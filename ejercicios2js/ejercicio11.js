/*Escribe un programa que le pida al usuario ingresar un número.

Si el número es múltiplo de 3 debe imprimir en la consola "bing".
Si el número es múltiplo de 5 debe imprimir en la consola "bong".
Si el número es múltiplo tanto de 3 como de 5 debe imprimir en la consola "bingbong".
Si no cumple ninguna de las condiciones anteriores debe imprimir el mismo número.*/

const numero=parseInt(prompt('Ingresa un numero'))
var multiplo3=numero%3
var multiplo5=numero%5
if(multiplo3==0 && multiplo5!==0){
console.log('bing')
}else if(multiplo3!==0 && multiplo5==0){
console.log('bong')
}else if(multiplo3==0 && multiplo5==0){
console.log('bingbong')
}else{
  console.log(numero)
}