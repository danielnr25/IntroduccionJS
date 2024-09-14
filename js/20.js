// Eventos del Dom - submit

const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit',(ev)=>{
   ev.preventDefault();
   const nombre = document.querySelector('#nombre').value;
   const password = document.querySelector('#password').value;

   if(nombre === '' || password === ''){
      console.log('Todos los campos son obligatorios');
      return;
   }
 
   console.log('Formulario enviado'); 
})