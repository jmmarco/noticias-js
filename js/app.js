var misNoticias = (function() {

  // entorno privado

  // Creamos un array para guardar las noticias
  var noticias = [];

  function agregarNoticia() {


    // Constructor Noticia
    function Noticia() {
      this.titulo = "";
      this.cuerpo = "";
    }

    // Creamos un objeto Noticia asignado a una variable
    var noticia = new Noticia();

    // Agregamos titulo y cuerpo
    noticia.titulo = prompt("Ingrese el titulo de la noticia");
    noticia.cuerpo = prompt("Ingrese el text de la noticia");

    // Si el usuario cargo algo hago esto, caso contrario..
    if (noticia.titulo && noticia.cuerpo !== null) {
      noticias.push(noticia);
      return true;
    } else {
      return false;
    }

  }


  function mostrarNoticia() {

    // Agarramos el container de noticias (fijate que metodo usamos)
    if (noticias.length > 0) {


      // capturo el elemento con ID "noticias" (fijate en el HTML)
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

      // Como la carga de noticias salio bien, devolvemos "true"
      return true;

    } else {
      // Si no hay nada en el array noticias devolvemos "false"
      return false;
    }

  }


  // entorno publico
  return {
    agregar: function() {
      // hacer algo
      if (agregarNoticia()) {
        return "Carga de noticias exitosa.";
      } else {
        return "No se ha cargado nada.";
      }

    },
    mostrar: function() {
      if (mostrarNoticia()) {
        return "Cargando noticias al DOM..";
      } else {
        return "No se ha agregado ninguna noticia, cargue una antes.";
      }

    }
  };

})();

console.log("Carga de JS realizada con exito!");