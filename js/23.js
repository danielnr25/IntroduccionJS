const url = "https://jsonplaceholder.typicode.com/comments";
// fetch: es una funcion que nos permite hacer peticiones HTTP desde Javascript
// recibe dos argumentos, la URL a la queremos hacer la peticion

//async: se usa para declarar la funcion como asincrona, es decir que me va devolver una promesa de manera más sencila.
// await: se usa dentro funcion async, para esperar a que una promesa se resulta

const consultarApi = async() =>{
   try {
      const respuesta = await fetch(url)
      const resultado = await respuesta.json()
      console.log(resultado)
   } catch (error) {
     console.log(error) 
   }
}


consultarApi();