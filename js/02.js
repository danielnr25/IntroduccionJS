// variable const: estás variables no pueden ser re-asignadas,
// debe inicializar con un valor

const nombre = 'daniel';
//nombre = 20; // esto me genera un error ya que no puede reasignar a una variable constante (const);

let numero = 20;
const numero2 = numero;
numero = 50;
console.log(numero2);
