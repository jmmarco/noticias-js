var misNoticias = (function() {

  // entorno privado

  function agregarNoticia() {
    var titulo = prompt("Ingrese el titulo de la noticia");
    var cuerpo = prompt("Ingrese el text de la noticia");


    // Agarramos el container de noticias
    var containerNoticias = document.getElementById("noticias");

    // Creamos el second level heading element
    var tituloConFormato = document.createElement("h2");

    // Le agregamos el titulo que le dimos
    tituloConFormato.innerHTML = titulo;

    // Creamos el parrafo con el texto de las noticias
    var parrafoConFormato = document.createElement("p");

    // Le agregamos el texto que le dimos
    parrafoConFormato.innerHTML = cuerpo;

    // Lo agregamos al container noticias
    containerNoticias.appendChild(tituloConFormato);
    containerNoticias.appendChild(parrafoConFormato);


    //
    // container.appendChild(parrafoConFormato);
    // parrafoConFormato.innerText(cuerpo);


  }


  function mostrarNoticia() {
    // Todavia no
  }


  // entorno publico


  return {
    agregar: function() {
      // hacer algo
      agregarNoticia();
    },

    eliminar: function() {
      // eliminar algo
    },

    mostrar: function() {
      // mostrar en el DOM
    }
  };

})();

console.log("Carga de JS realizada con exito!");

