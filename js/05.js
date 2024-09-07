// Manipulación de Objetos: Los objetos son mutables, es decir, se pueden modificar, añadir, eliminar propiedadess de un objeto.

const producto = {
   nombre: 'Monitor de 20 pulgadas',
   precio: 300,
   disponible: true,
}
// método freeze: congelar un objeto, no se puede modificar, añadir o eliminar propiedades de un objeto.
//Object.freeze(producto);
// metodo seal: sellar un objeto, pero si se pueden añadir o eliminar propiedades de un objeto pero si puedes hacer modificaciones al objeto.
Object.seal(producto);
console.table(producto);
// Reescribir un valor: se puede reescribir un valor de una propiedad de un objeto, en cualquier momento.
producto.nombre = 'Tablet';
producto.precio = 400;

// Agregar nuevas propiedades: se pueden agregar nuevas propiedades a un objeto en cualquier momento.
producto.imagen = 'imagen.jpg';
producto.stock = 'imagen.jpg';
producto.marca = 'imagen.jpg';

// Eliminar propiedades: se pueden eliminar propiedades de un objeto en cualquier momento.
delete producto.stock;
delete producto.nombre;

console.table(producto);