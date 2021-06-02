document.addEventListener('DOMContentLoaded', () => {
  cargarPortafolio();
});

function cargarPortafolio() {
  fetch('datos.json')
    .then(res => res.json())
    .then(data => {
      console.log(data);
      let html = '';
      data.portafolio.forEach(element => {
        html += `
          <div class="elemento">
            <img src="img/${element.id}.jpg">
            <div class="contenido">
              <h3>${element.nombre}</h3>
              <p>${element.desc}</p>
            </div>
          </div>
        `;
      });
      document.querySelector('#listado').innerHTML = html;
    });
}