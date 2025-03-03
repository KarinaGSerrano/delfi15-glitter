// MENU
document.addEventListener('scroll', () => {
  const scrollPosition = window.scrollY;
  const mainMenu = document.getElementById('mainMenu');
  const menuLogo = document.getElementById('menuLogo');

  if (scrollPosition > 100) {
    // Reducir tamaño del logo al mostrar el nav
    mainMenu.classList.remove('-translate-y-full');
    menuLogo.classList.remove('text-3xl');
    menuLogo.classList.add('text-xl');
  } else {
    // Restaurar tamaño del logo al ocultar el nav
    mainMenu.classList.add('-translate-y-full');
    menuLogo.classList.remove('text-xl');
    menuLogo.classList.add('text-3xl');
  }
});

// ANIMACION ESCALERA

// H1
document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.text-anim');

  // Ejecuta la animación inmediatamente cuando se carga la página
  elements.forEach((el, index) => {
    setTimeout(() => {
      el.classList.add('animate__fadeInUp');
      el.classList.remove('invisible');
    }, index * 75); // Controla el retraso entre los elementos para la cascada
  });
});

// FECHA
document.addEventListener('DOMContentLoaded', function () {
  // Seleccionamos los elementos con las clases escalera-1 y escalera-2
  const escaleras = document.querySelectorAll('.escalera-1, .escalera-2');

  // Creamos el IntersectionObserver
  const obs = new IntersectionObserver(
    function (entries) {
      entries.forEach((entry) => {
        // Si el elemento está en el viewport, agregamos la clase 'show'
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          // Si el elemento ya no está en el viewport, removemos la clase 'show'
          entry.target.classList.remove('show');
        }
      });
    },
    {
      threshold: 0.5, // 50% del elemento debe ser visible para activar la animación
    }
  );

  // Observamos cada uno de los elementos
  escaleras.forEach((escalera) => {
    obs.observe(escalera);
  });
});

function scrollAndAnimate(event, sectionId) {
  event.preventDefault();

  const section = document.getElementById(sectionId);
  const link = event.currentTarget;

  // Desplaza suavemente a la sección
  section.scrollIntoView({ behavior: 'smooth' });

  // Agrega la clase animate__slideInDown solo cuando se hace clic
  link.classList.add('animate__slideInDown');

  // Remueve la clase animate__slideInDown después de la duración de la animación (1s)
  setTimeout(() => {
    link.classList.remove('animate__slideInDown');
  }, 1000); // Duración en milisegundos
}
