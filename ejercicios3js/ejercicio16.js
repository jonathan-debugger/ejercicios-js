/*Ejercicio 16
Escribe un programa que:

Le pida al usuario un string (una cadena de texto).
Si el string es "salir" (todo en minúsculas) el programa debe imprimir en la consola "Hasta pronto!" y terminar.
De lo contrario imprime en la consola lo que el usuario ingresó y repite el proceso desde el paso 1.
Comparte tu respuesta en este enlace.*/

var  salir=prompt('Ingresa  una  cadena de  texto')

while(salir!='salir'){
 salir=prompt('Ingresa  una  cadena de  texto')
}
console.log('Hasta pronto')
