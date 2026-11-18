// Interacciones simples para la navegación en pantallas pequeñas.
const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.main-nav');
if (menuButton && menu) {
  menuButton.addEventListener('click', () => {
    const opened = menu.classList.toggle('is-open');
    menuButton.setAttribute('aria-expanded', String(opened));
    menuButton.setAttribute('aria-label', opened ? 'Cerrar navegación' : 'Abrir navegación');
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }));
}
// Los formularios son demostrativos y no envían información a servidores.
document.querySelectorAll('[data-demo-form]').forEach(form => {
  form.addEventListener('submit', event => {
    event.preventDefault();
    const feedback = form.querySelector('.form-feedback');
    if (feedback) feedback.textContent = 'Formulario completado correctamente. Esta es una demostración: no se enviaron datos.';
    form.reset();
  });
});
