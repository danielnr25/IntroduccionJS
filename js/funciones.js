function sumar(num1, num2){
   return num1+num2
}

function restar(num1,num2){
   return num1 - num2
}

const hola = 'Hola mundo';
const hola2 = 'Daniel';

export default hola; // exportacion por default una sola vez

export{ // exportacion nombrada permite exportar multiples funciones, variables
   sumar,
   restar,
   hola2 
}

// import texto,{sumar as suma} from './funciones.js'
// console.log(texto)

// console.log(sumar(4,5))