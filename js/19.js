// Eventos: Los eventos son acciones que sucenden en el navegador, como por ejemplo: como hacer click en un boton, escribir en un input, hacer scroll en la pagina, etc.

const heading = document.querySelector('.heading');
const enlaces = document.querySelectorAll('.navegacion a');

//eventos de teclado : keydown, keyup, keypress
//eventos de input: input, change, submit,focus, blur
//eventos de mouse: click, dbclick, mouseenter, mouseleave
//eventos de formulario: submit, reset
//eventos de documentos: domcontentloaded, load, beforeunload, unload

// addEventListener: Nos permite escuchar eventos en el DOM
heading.addEventListener('dblclick',() =>{
   const numero = 10;
   if(numero==2){
      heading.textContent = 'Mi numero es 2';
   }else{
      heading.textContent = 'Es otro numero';
   }
})

enlaces.forEach(enlace=>{
   enlace.addEventListener('click',(evento)=>{
      evento.preventDefault();
      enlace.textContent= 'Nuevo nombre';
   });
})
