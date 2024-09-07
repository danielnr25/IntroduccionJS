// arrow functions o funciones de flecha: son una forma más corta de escribir funciones en javascript. 
// reemplazan las funciones declarativas y las funciones expresivas.
// como definir una arrow function: 
// const nombreFuncion = (parametro1, parametro2) => {}
// const sumar = (numero1=10, numero2=30) =>{
//    console.log(numero1 + numero2);
// }

const tecnologias = ['VUE','JAVASCRIPT','REACT','NODE.JS','ANGULAR'];

// const arrayForEach = tecnologias.forEach(function(tech){
//    console.log(tech);
// })

//tecnologias.forEach(tech => {console.log(tech)});

const arrayMap = tecnologias.map(function(tech){
   //console.log(tech);
   return tech;
})

const array = tecnologias.map(tech => tech);
console.log(array);