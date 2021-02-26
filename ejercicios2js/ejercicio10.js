/*El índice de masa corporal (IMC), o BMI por sus siglas en inglés, es un valor que determina la cantidad de grasa de una persona.

El BMI se calcula con la siguiente formula:

peso / altura^2
Escribe un programa que le pida al usuario su peso y altura. El programa deberá calcular el BMI e imprimir:

"Bajo de peso" si el BMI < 18.5
"Normal" si está entre 18.5 y 24.9
"Sobrepeso" si está entre 25 y 29.9
"Obeso" si es igual o mayor a 30*/

const peso=Number(prompt('Ingresa tu peso'))
var altura=prompt('Ingresa tu altura en metros  y con un punto')

var imc=peso/(altura**2)

if(imc<18.5){
  console.log('Estas Bajo')
}else if(imc>=18.5 && imc<=24.9){
  console.log('Estas Normal')
}else if(imc>=25 && imc<=29.9){
  console.log('Estas con Sobrepeso')
}else  if(imc>=30){
  console.log('Estas Obeso')
}