// Envio de formulario 

document.getElementById("reservaForm").addEventListener("submit", e => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const servicio = document.getElementById("servicio").value;
  const fechaHora = document.getElementById("fechaHora").value;

  const telefono = "573132675755"; // cámbialo por el real
  const mensaje = `Hola, soy ${nombre}. Quiero reservar un ${servicio} el día ${fechaHora}. ¿Está disponible ese horario?`;

  const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, "_blank"); // abre WhatsApp
});

// animacion de servicios y precio

const servicios = document.querySelectorAll('.servicio-item');

const observerServicios = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
      }
    });
  },
  { threshold: 0.3 }
);

servicios.forEach(servicio => observerServicios.observe(servicio));

// envio de imagen al whatsaap

const telefono = "573132675755";

document.querySelectorAll(".diseno-whatsapp").forEach(img => {
  img.addEventListener("click", () => {
    const nombre = img.dataset.diseno;
    const imagen = img.dataset.img;

    const mensaje = 
`Hola 💅✨
Quiero este diseño: *${nombre}*
Aquí está la imagen:
${imagen}`;

    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, "_blank");
  });
});

//abrir y cerrar servicios y precios

function toggleLista() {
  document.getElementById("servicios").classList.toggle("activa");
}