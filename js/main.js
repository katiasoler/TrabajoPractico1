// 1. ABRIR MODAL A LOS 3 SEGUNDOS
document.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    const modalEl = document.getElementById('newsletterModal');

    if (!modalEl) return;

    const modal = new bootstrap.Modal(modalEl);
    modal.show();
  }, 3000);
});

// 2. CAMBIO DE TEMA (DARK/LIGHT)
const btnTheme = document.getElementById('themeToggle');
const html = document.documentElement;

const temaGuardado = localStorage.getItem('tema');

if (temaGuardado) {
  html.setAttribute('data-bs-theme', temaGuardado);

  if (temaGuardado === 'dark') {
    btnTheme.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>';
  }
}

btnTheme.addEventListener('click', () => {
  const temaActual = html.getAttribute('data-bs-theme');

  if (temaActual === 'dark') {
    html.setAttribute('data-bs-theme', 'light');

    localStorage.setItem('tema', 'light');

    btnTheme.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-moon"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454l0 .008" /></svg>';
  } else {
    html.setAttribute('data-bs-theme', 'dark');

    localStorage.setItem('tema', 'dark');

    btnTheme.innerHTML =
      '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon icon-tabler icons-tabler-outline icon-tabler-sun"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M8 12a4 4 0 1 0 8 0a4 4 0 1 0 -8 0" /><path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7" /></svg>';
  }
});

// 3. VALIDACIÓN DE NEWSLETTER

const formNewsletter = document.getElementById('form-newsletter');
const inputEmail = document.getElementById('email-newsletter');
const msgNewsletter = document.getElementById('msg-newsletter');

formNewsletter.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = inputEmail.value.trim();

  if (email.length < 4 || !email.includes('@')) {
    msgNewsletter.textContent = 'Por favor ingresá un email válido.';
    msgNewsletter.style.color = '#e04545';
    return;
  }

  msgNewsletter.textContent = `¡Gracias! Vas a recibir noticias en ${email}.`;
  msgNewsletter.style.color = '#57db74';

  inputEmail.value = '';
});
