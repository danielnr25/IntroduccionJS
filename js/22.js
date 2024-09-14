// MODULOS: Los modulos de ES6 son archivos que se pueden exportar, importar funciones, clases, etc.

// Export: nos permite exportar funciones, variables,clases etc de un archivo a otro.

// Import: nos permite importar funciones, variables,clases etc de un archivo a otro.


import texto, {sumar as suma,restar} from './funciones.js';

const sumar = function(){
   console.log('suma')
}

console.log(sumar)
console.log(suma(10,30))
console.log(restar(40,10))
console.log(texto)