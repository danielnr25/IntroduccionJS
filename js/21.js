// Eventos del Dom - submit

const formulario = document.querySelector("#formulario");

formulario.addEventListener('submit',(ev)=>{
   ev.preventDefault();

   const alertaPrevia = document.querySelector('.alerta');
   alertaPrevia?.remove();

   const alerta = document.createElement('DIV');
   alerta.textContent = 'Todos los campos son obligatorios';
   alerta.classList.add('alerta','bg-red-500','text-center','text-white','uppercase','p-2','font-black');

   const nombre = document.querySelector('#nombre').value;
   const password = document.querySelector('#password').value;

   if(nombre === '' || password === ''){
      //console.log('Todos los campos son obligatorios');
      // formulario.appendChild(alerta);

      // setTimeout(()=>{
      //    alerta.remove();
      // },3000)
      Swal.fire({
         title: "The Internet?",
         text: "That thing is still around?",
         icon: "question"
       });
      return;
   }
  
})