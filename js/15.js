// operador || (or) y && (and)

const disponible = 100;
const total = 500;
const tarjeta = true;

// if(tarjeta){
//    console.log('Puedes pagar con tarjeta');
// }else if(disponible>total){
//    console.log('Puedes pagar en efectivo');
// }else{
//    console.log('No puedes pagar');
// }

if(tarjeta && disponible>total){
   console.log('Puedes pagar');
}else{
   console.log('No puedes pagar');
}