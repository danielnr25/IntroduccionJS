// ITERADORES EN JS: nos permite recorrer un array, objeto, etc. y ejecutar una función por cada elemento, en este caso se usa el método forEach y map

const tecnologias = ['VUE','JAVASCRIPT','REACT','NODE.JS','ANGULAR'];

// forEach: recorre el array y ejecuta una función por cada elemento

const arrayForEach = tecnologias.forEach(function(tech){
   console.log(tech);
})

// map: recorre el array y ejecuta una función por cada elemento, además retorna un nuevo array con los resultados de la función

const arrayMap = tecnologias.map(function(tech){
   //console.log(tech);
   return tech;
})

console.log(arrayForEach);
console.log(arrayMap);