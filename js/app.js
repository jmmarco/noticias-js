var misNoticias = (function() {

  // entorno privado

  // Creamos un array para guardar las noticias
  var noticias = [];

  function agregarNoticia() {


    function Noticia() {
      this.titulo = "";
      this.cuerpo = "";
    }

    var noticia = new Noticia();

    noticia.titulo = prompt("Ingrese el titulo de la noticia");
    noticia.cuerpo = prompt("Ingrese el text de la noticia");

    noticias.push(noticia);

  }


  function mostrarNoticia() {

    // Agarramos el container de noticias (fijate que metodo usamos)
    var containerNoticias = document.getElementById("noticias");


    // Creamos un par de variables para el titulo y parrafo
    var tituloConFormato;
    var parrafoConFormato;


    // Iteramos sobre el array de noticias
    for (var i = 0; i < noticias.length; i++) {

      // Creamos los elementos y los asignamos
      tituloConFormato = document.createElement("h2");
      parrafoConFormato = document.createElement("p");

      // Agrego el contenido del titulo y noticias
      tituloConFormato.innerHTML = noticias[i].titulo;
      parrafoConFormato.innerHTML = noticias[i].cuerpo;

      // Los agrego al DOM
      containerNoticias.appendChild(tituloConFormato);
      containerNoticias.appendChild(parrafoConFormato);
    }

    // Vaciamos el array al finalizar (proba que pasa si sacas esto)
    noticias = [];

  }


  // entorno publico
  return {
    agregar: function() {
      // hacer algo
      agregarNoticia();
      return "Carga de noticias exitosa";

    },
    mostrar: function() {
      mostrarNoticia();
    }
  };

})();

console.log("Carga de JS realizada con exito!");