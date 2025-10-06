console.log(document.title);

// 1. Cambia el título "Generation 1 Pokémon" por "Generasión 1 Pokimon".
 const titulo = document.getElementById("gen-1");
 titulo.innerText = "Generasión 1 Pokimon";

// 2. Cambia el color de fondo de la primera generación de Pokimon

const primeraGeneracion = document.getElementById("primeraGeneracion");
primeraGeneracion.style.backgroundColor = "#ffdcbbff"

// 3. Imprime por consola la URL de la página.

console.log(window.location.href);

// 4. Imprime por consola el dominio de la página.

console.log(window.location.hostname);

// 5. Imprime todos los nodos de imagen.

const img = document.querySelectorAll("img");
for (let i = 0; i < img.length; i++) {
  const imgnodos = img[i];
  console.log('Imagen ' + i, imgnodos);
}

//. 6. Sustituye el atributo "src" de todas las imágenes por este "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"

 const imagenes = document.querySelectorAll("img");

 for (const img2 of imagenes) {
  img2.src = "https://media.giphy.com/media/2v170e71aanfi/giphy.gif";
}