/*Ejercicio 37
Escribe una función buscarProducto que reciba un arreglo de objetos y un número. La función deberá buscar el número dentro de cada objeto (en la llave id) y retornar el objeto encontrado.

Si no encuentra un objeto con ese id deberá retornar null.
*/

const buscarProducto=(arr,num)=>{

for(i=0; i<arr.length; i++){
    if(arr[i].id==num){
      return arr[i]
    }
}
return  null
}
// código de prueba
let productos = [{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }]
console.log(buscarProducto(productos, 1)) // { id: 1, nombre: "A" }

productos = [{ id: 1, nombre: "A" }, { id: 2, nombre: "B" }]
console.log(buscarProducto(productos, 566)) // nul1