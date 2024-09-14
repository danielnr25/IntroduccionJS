const heading = document.querySelector('.heading');
heading.textContent = 'Mi primera manipulación del DOM';
heading.style.color = 'green';
heading.style.backgroundColor = '#ddd';
heading.style.padding = '20px';
heading.style.textAlign = 'center';

//

const inputNombre = document.querySelector('#nombre');
inputNombre.value = 'Daniel';

const enlaces = document.querySelectorAll('.navegacion a');
enlaces.forEach(enlace => enlace.textContent = 'Curso de vue.js');