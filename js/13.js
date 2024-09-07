// array methods: Includes, findIndex, Some,Every,reduce

//includes: busca un elemento en un array y devuelve true si lo encuentra y false si no lo encuentra.

const tecnologias = ['VUE','JAVASCRIPT','REACT','NODE.JS','ANGULAR'];
const numeros = [10,20,40,50];

let resultado = tecnologias.includes('express');

//findIndex: busca un elemento en un array y devuelve el índice de la primera coincidencia.
resultado = tecnologias.findIndex(tech => tech === 'HTML');


//SOME: busca un elemento en un array y devuelve true si lo encuentra y false si no lo encuentra.
resultado = numeros.some(numero => numero >70);

// find: devuleve el primer elemento que cumpla con la condición.
resultado = numeros.find(num =>num >10);


//EVERY: busca un elemento en un array y devuelve true si todos los elementos cumplen con la condición.
resultado = numeros.every(num => num > 15);

//reduce: reduce un array a un solo valor.
resultado = numeros.reduce((total,num) => num + total,0);

console.log(resultado);