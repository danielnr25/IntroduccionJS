// DESTRUCTURING DE 2 O MÁS OBJETO: Se puede hacer destructuring de 2 o más objetos en una sola línea. Es muy utile cuando se trabaja con objetos anidados.

const producto = {
   nombre:'tablet',
   precio:900,
   disponible:true,
}

const cliente = {
   nombre:'Daniel',
   premium:true,
}

//console.log(producto.nombre);
//console.log(cliente.nombre);

// en este caso no se puede hacer destructuring porque ya existe una variable con el mismo nombre.
 const {nombre:nombreProducto} = producto;
 const {nombre:nombreCliente} = cliente;

 console.table(producto);
 console.table(cliente);
 console.log(nombreProducto);
 console.log(nombreCliente);