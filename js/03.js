// tipos de datos primitivos - primarios: son los màs basicos y
// fundamentales dentro de un lenguaje de programacion por ejemplo:
// numeros enteros (Number), cadena de texto (string), boolean, null, undefined

// tipos de datos secundarios - compuestos: Por ejemlo: Los arreglos (arrays),
// objecto (object), functiones (functions);

// typeof : nos permite saber el tipo de dato de una variable

// undefined: este tipo de dato es sin valor asignado o sin definir
// let cliente;
// console.log(cliente);
// cliente = 20;
// console.log(cliente);

// let nombre = 'abc'; 
// console.log(parseInt(nombre)); // NaN: es un valor especial que indica un error en el càlculo.

// Boolean: true o false, es decir verdadero o falso.
// const descuento = true;
// console.log(typeof descuento);

//object
// let a = ['a', 'b', 1, 10]; // array 

// const persona = [
//    {
//       id: Symbol(1),
//       nombre: 'Carlos',
//       esEstudiante: true
//    },
//    {
//       id: Symbol('abc'),
//       nombre: 'Juber',
//       esEstudiante: true
//    },
//    {
//       nombre: 'Abimael',
//       esEstudiante: true
//    },
//    4,
//];

// persona[''] = { nombre: 'Daniel', esEstudiante: true }
// persona[1] = { nombre: 'Daniel2', esEstudiante: true }
// console.log(persona['']);
// console.log(persona['']);
//console.log(persona[0]);

// let b = {
//    a: 1,
//    'b': 3
// };
// console.log(typeof a);
// console.log(typeof b);

// Number: nùmeros enteros, decimales, negativos, etc.
// const numero1 = 20.40;
// const numero2 = 100;
// const numero3 = -300;

// console.log(typeof numero1);
// console.log(typeof numero2);
// console.log(typeof numero3);

// const nombre = 'C'; Dentro de JS no existe el tipo de dato CHAR
// console.log(typeof nombre);

// NULL: valor especial que indica ausencia de un dato

// let nombre = null;
// if (nombre) {
//    console.log(true)
// } else {
//    console.log(40)
// }

// const descuento = null;
// console.log(typeof descuento); // en javascript me arroja como un object, el cual es un error dentro de javascript que hasta la fecha no ha ha sido actualizado

//symbol: es un conector de objectos que nos permite crear identificadores unicos

// const primer = Symbol(1);
// const segundo = Symbol(1);

// console.log(primer);
// console.log(segundo);
// console.log(primer === segundo);
// const primer = Symbol(1); //103013012310
// const segundo = Symbol('100'); //010101213123
// console.log(typeof primer);
// console.log(typeof segundo);

// console.log(primer === segundo);

// OBJECT: es un tipo de dato que permite almacenarnos multiples valores en una varible, 
const numeros = [1, 2, 3, 4];
const alumnos = {};
const descuento = null;
console.log(typeof alumnos);
console.log(typeof numeros);
console.log(typeof descuento);