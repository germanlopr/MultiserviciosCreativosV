// Función para mostrar el botón después de desplazarse hacia abajo 100px
window.onscroll = function() {
    var boton = document.querySelector(".home-btn")

    // Asegúrate de que el elemento exista
    if (boton) {
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        boton.classList.add('activo');
      } else {
        boton.classList.remove('activo');
      }
    }
  };
