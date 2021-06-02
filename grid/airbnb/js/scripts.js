document.addEventListener('DOMContentLoaded', () => {
  // img header
  const imagenHero = document.querySelector('.hero');
  let i = 0;
  let tiempo = 0;
  const imagenes = ['arriba2.jpg', 'arriba.jpg'];
  setInterval(() => {
    imagenHero.style.backgroundPositionY = `-${tiempo}px`;
    if (tiempo > 40) {
      tiempo = 0;
      imagenHero.style.backgroundImage = "url(../img/" + imagenes[i] + ")";
      if (i === imagenes.length - 1) {
        i = 0;
      } else {
        i += 1;
      }
    }
    tiempo += 1;
  }, 100);
  // footer fixed boton
  const btnFlotante = document.querySelector('.btn-flotante');
  btnFlotante.addEventListener('click', e => {
    e.preventDefault();
    const footer = document.querySelector('#footer');
    console.log(footer.classList);
    if (footer.classList.contains('activo')) {
      footer.classList.remove('activo');
      btnFlotante.classList.remove('activo');
      btnFlotante.innerText = 'Idioma y Moneda';
    } else {
      footer.classList.add('activo');
      btnFlotante.classList.add('activo');
      btnFlotante.innerText = 'X Cerrar';
    }
  });
});
