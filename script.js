document.addEventListener("DOMContentLoaded", () => {

  // Envío formulario WhatsApp
  const form = document.getElementById("reservaForm");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();

      const nombre = document.getElementById("nombre").value;
      const servicio = document.getElementById("servicio").value;
      const fechaHora = document.getElementById("fechaHora").value;

      const telefono = "573132675755";
      const mensaje = `Hola, soy ${nombre}. Quiero reservar un ${servicio} el día ${fechaHora}.`;

      window.open(
        `https://wa.me/${telefono}?text=${encodeURIComponent(mensaje)}`,
        "_blank"
      );
    });
  }

  // Animación servicios
  const servicios = document.querySelectorAll(".servicio-item");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add("show");
    });
  }, { threshold: 0.3 });

  servicios.forEach(item => observer.observe(item));

  // Envío diseño WhatsApp
  document.querySelectorAll(".diseno-whatsapp").forEach(img => {
    img.addEventListener("click", () => {
      const nombre = img.dataset.diseno;
      const imagen = img.dataset.img;

      const mensaje = `Hola 💅✨\nQuiero este diseño: ${nombre}\n${imagen}`;
      window.open(
        `https://wa.me/573132675755?text=${encodeURIComponent(mensaje)}`,
        "_blank"
      );
    });
  });

});
