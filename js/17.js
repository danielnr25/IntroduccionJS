// ¿Que es el DOM? : DOCUMENT OBJECT MODEL 
// El DOM es una interfaz de programación que permite a los programadores manipular el contenido de una página web con JavaScript. El DOM es una representación del documento HTML que se genera en el navegador cuando se carga una página web. El DOM es una estructura de árbol de nodos que representa el contenido de la página web. Cada elemento HTML es un nodo en el árbol del DOM. Los nodos del DOM pueden ser manipulados con JavaScript para cambiar el contenido de la página web.

// querySelector :  Devuelve el primer elemento que coincida con un grupo de selectores CSS especificados en el documento.

const heading = document.querySelector('.heading');
//textContent: Devuelve el contenido de texto del node heading.
console.log(heading.textContent);
// innerText: Devuelve el contenido de texto del node heading.
console.log(heading.innerText);
// innerHTML: Devuelve el contenido HTML del node heading.
console.log(heading.innerHTML);
// tagName: Devuelve el nombre del tag(etiqueta) del node heading.
console.log(heading.tagName);
//classList: Devuelve una coleccion de las clases del node heading.
console.log(heading.classList);
//id: Devuelve el id del node heading.
console.log(heading.id);
//style: Devuelve el estilo del node heading. Devuelve el objeto CSSStyleDeclaration que representa el estilo del elemento.
console.log(heading.style);

// cambiar el color del texto
//heading.style.color = 'blue';

const enlaces = document.querySelector(".navegacion a"); // En este caso solo selecciona el primer enlace que encuentre.
console.log(enlaces);