// MANIPULAR ARREGLOS: LOS ARREGLOS TIENEN MÉTODOS QUE PERMITEN MODIFICAR SU CONTENIDO.

// Los métodos más comunes son: push(), pop(), shift(), unshift(), slice(), indexOf(), lastIndexOf(), includes(), reverse(), join(), sort().

const tecnologias = ['VUE','JAVASCRIPT','REACT','NODE.JS','ANGULAR'];

//push: añadir un elemento al final del arreglo.
//tecnologias.push('PYTHON');

//unshift: añadir un elemento al inicio del arreglo.
//tecnologias.unshift('PYTHON');

//pop: sirve para eliminar un elemento del final del arreglo.
//tecnologias.pop();

//shift: sirve para eliminar un elemento del inicio del arreglo.
//tecnologias.shift(); 

//splice: sirve para eliminar un elemento en una posición específica.

//console.log(tecnologias);
//primer parámetro: posición de inicio(indice).
//segundo parámetro: cantidad de elementos a eliminar.
//tecnologias.splice(0,3); //Elimina el elemento en la posición 1.

//filter : crear un nuevo arreglo con todos los elementos que cumplan la condición implementada por la función dada.
// const tecnologias2 = tecnologias.filter(function(valor){
//       if(valor != 'REACT' && valor != 'NODE.JS' && valor != 'ANGULAR'){
//          return valor;
//       };   
// });

const filtro = tecnologias.filter(index => index.includes('R'));
console.log(filtro);