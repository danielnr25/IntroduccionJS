const url = "https://jsonplaceholder.typicode.com/comments"

const consultarApi = () => {
   fetch(url)
      .then((respuesta) => respuesta.json())
      .then(resultado =>{
         console.log(resultado)
      })
      .catch(error =>{
         console.log(error)
      })
      .finally(()=>{
         console.log('todo listo')
      })
}

consultarApi()