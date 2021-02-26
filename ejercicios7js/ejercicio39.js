/*Ejercicio 39
Escribe una función llamada frecuencias que reciba un string y retorne un objeto con el número de veces que aparece cada carácter (exceptuando el espacio en blanco): */


const frecuencias=(srt)=>{
let desifrar={}

srt=srt.split('')

  for(i=0; i<srt.length; i++){
    
    if(desifrar[srt[i]]&& srt[i]!==' '){//si esta propiedad existe le agregamos otra
      
      desifrar[srt[i]]+=1
    }else if(srt[i]!==' '){//de lo contrario la iniciamos en 1 y asi se van sumando
      desifrar[srt[i]]=1
    }
    }
return desifrar
}


// código de prueba
console.log(frecuencias("hola mundo"))
// { h: 1, o: 2, l: 1, a: 1, m: 1, u: 1, n: 1, d: 1 }

console.log(frecuencias("anita lava la tina"))
// { a: 6, n: 2, i: 2, t: 2, l: 2, v: 1 }
