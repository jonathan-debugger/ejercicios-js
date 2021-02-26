/* 
Ejercicio 19
Escribe un programa que:

Le pida al usuario un número y cree un arreglo de números empezando en el 1 hasta el número que el usuario ingrese (incluyéndolo)
Elimine el segundo elemento.
Recorra e imprima el arreglo.
Ejemplo:

Ingresa un número> 5
1
3
4
5
Nota: los 3 pasos de este ejercicio se deben realizar con programación según lo visto en clase.
*/
var array=[]
const numero=Number(prompt('Ingrese un numero'))

for(i=0; i<=numero; i++){
array[i]=i

}
array.splice(1,1)
for(i=0; i<=array.length; i++){
console.log(array[i])  
}



