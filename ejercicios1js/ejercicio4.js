/*
Escribe un programa que le pida al usuario su año de nacimiento e imprima su edad actual en la consola con la frase "Tienes X años". Por ejemplo, asumiendo que el año actual es 2020 y el usuario ingresa 2000, el programa debe imprimir en la consola:

Tienes 20 años*/
var date=  new  Date()
date=date.getFullYear()
let añoNacimiento=parseInt(prompt('Ingresa tu año de nacimiento'));
let edadActual=date-añoNacimiento;
console.log('Tienes '+edadActual+'años');