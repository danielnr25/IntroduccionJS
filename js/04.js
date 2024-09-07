//Objeto: Un objeto es una colección de propiedades o de datos que se almacenan en una variable, y cada dato es una asociación clave-valor.

const nombreProducto = 'Monitor de 20 pulgadas';
const precioProducto = 300;
const disponibleProducto = true;

const producto = {
   nombre: 'Monitor de 20 pulgadas',
   precio: 300,
   disponible: true,
}

// console.log(typeof producto);
// console.log(producto);
// console.table(producto);
// console.log(producto.precio);
// console.log(producto.stock);


// DESTRUCTURING DE OBJETOS: Es una forma de acceder a los valores de un objeto o de un array de una forma más sencilla y rápida.

//const {nombre,precio,disponible,stock} = producto;

// console.log(nombre);
// console.log(precio);
// console.log(stock);

const autenticado = true;
const usuario = 'Daniel';

const nuevoObjeto = {
   autenticado,
   user:usuario,//puedo cambiar la clave por cualquier nombre que desee pero el valor deberá ser el mismo que el de la variable creada al inicio sino me dará un error o undefined.
}


console.log(nuevoObjeto);