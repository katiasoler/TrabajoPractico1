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

if (formNewsletter) {
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
}

//4. VALIDACIÓN DE FORMULARIO
// Espera a que el contenido del DOM esté listo para ejecutar la validación.
document.addEventListener("DOMContentLoaded", function () {
    // Selección de los elementos del formulario.
    const formulario = document.getElementById("form-contact");
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");
    const telefono = document.getElementById("telefono");
    const pais = document.getElementById("pais");
    const fecha = document.getElementById("fecha");
    const asunto = document.getElementById("asunto");
    const mensaje = document.getElementById("mensaje");

    // Si no existe el formulario, no hace nada.
    if (!formulario) return;

    // Crea un párrafo de mensaje de éxito y lo agrega al final del formulario.
    const mensajeExito = document.createElement("p");
    mensajeExito.id = "mensaje-exito";
    mensajeExito.className = "exito";
    mensajeExito.hidden = true;
    mensajeExito.textContent = "¡Formulario enviado exitosamente!";
    formulario.appendChild(mensajeExito); // Agrega el mensaje de éxito al final del formulario.

    // Función para crear o devolver el elemento de error asociado a un campo.
    function obtenerError(input, errorId, texto) {
        let error = document.getElementById(errorId);

        if (!error) {
            error = document.createElement("p");
            error.id = errorId;
            error.className = "error";
            error.hidden = true;
            input.insertAdjacentElement("afterend", error); // Inserta el mensaje de error después del campo.
        }

        error.textContent = texto;
        return error;
    }

    // Marca un campo como válido o inválido y muestra/oculta su mensaje.
    function validarCampo(input, esValido, errorId, mensajeTexto) {
        const error = obtenerError(input, errorId, mensajeTexto);

        if (esValido) {
            error.hidden = true;
            input.classList.remove("is-invalid");
            input.classList.add("is-valid");
            return true;
        }

        error.hidden = false;
        input.classList.add("is-invalid");
        input.classList.remove("is-valid");
        return false;
    }

    // Limpia los estilos de validación de los campos.
    function limpiarValidacion() {
        const elementos = [nombre, email, telefono, pais, fecha, asunto, mensaje];

        elementos.forEach(function (input) {
            if (input) {
                input.classList.remove("is-valid", "is-invalid");
            }
        });
    }

    // Cuando el usuario escribe o cambia un campo, limpia el estado de errores.
    function limpiarAlEscribir(input, errorId) {
        if (!input) return;

        input.addEventListener("input", function () {
            const error = document.getElementById(errorId);
            if (error) {
                error.hidden = true;
            }
            input.classList.remove("is-invalid", "is-valid");
            mensajeExito.hidden = true;
        });
    }

    limpiarAlEscribir(nombre, "errorNombre");
    limpiarAlEscribir(email, "errorEmail");
    limpiarAlEscribir(telefono, "errorTelefono");
    limpiarAlEscribir(pais, "errorPais");
    limpiarAlEscribir(fecha, "errorFecha");
    limpiarAlEscribir(asunto, "errorAsunto");
    limpiarAlEscribir(mensaje, "errorMensaje");

    // Funciones de validación individuales para cada campo.
    function validarNombre() {
        return validarCampo(nombre, nombre.value.trim().length >= 3, "errorNombre", "Debes completar este campo.");
    }

    function validarEmail() {
        const valor = email.value.trim();
        const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return validarCampo(email, patron.test(valor), "errorEmail", "Ingresa un email válido.");
    }

    function validarTelefono() {
        const valor = telefono.value.trim();
        const patron = /^[0-9]+(?:-[0-9]+)*$/;
        const valido = patron.test(valor) && valor.replace(/-/g, '').length >= 8;
        return validarCampo(telefono, valido, "errorTelefono", "El teléfono debe contener solo números y guiones, y al menos 8 dígitos.");
    }

    function validarPais() {
        return validarCampo(pais, pais.value !== "", "errorPais", "Selecciona un país.");
    }

    function validarFecha() {
        // Asegura que exista un valor y que esté en formato YYYY-MM-DD
        var val = fecha.value;
        if (!val) {
            return validarCampo(fecha, false, "errorFecha", "Selecciona una fecha válida.");
        }

        var partes = val.split('-');
        if (partes.length !== 3) {
            return validarCampo(fecha, false, "errorFecha", "Fecha inválida.");
        }

        var y = parseInt(partes[0], 10);
        var m = parseInt(partes[1], 10) - 1; // meses 0-11
        var d = parseInt(partes[2], 10);

        if (!Number.isInteger(y) || !Number.isInteger(m) || !Number.isInteger(d)) {
            return validarCampo(fecha, false, "errorFecha", "Fecha inválida.");
        }

        var fechaObj = new Date(y, m, d);
        // Verifica que la fecha construida coincida con los valores (evita 2020-02-30)
        if (fechaObj.getFullYear() !== y || fechaObj.getMonth() !== m || fechaObj.getDate() !== d) {
            return validarCampo(fecha, false, "errorFecha", "Fecha inválida.");
        }

        var min = new Date(1950, 0, 1); // 01-01-1950
        var max = new Date(2030, 11, 31); // 31-12-2030
        var valido = fechaObj >= min && fechaObj <= max;

        return validarCampo(fecha, valido, "errorFecha", "Selecciona una fecha entre 01-01-1950 y 31-12-2030.");
    }

    function validarAsunto() {
        return validarCampo(asunto, asunto.value.trim().length >= 5, "errorAsunto", "El asunto es obligatorio.");
    }

    function validarMensaje() {
        return validarCampo(mensaje, mensaje.value.trim().length >= 10, "errorMensaje", "El mensaje debe tener al menos 10 caracteres.");
    }

    // Escucha el envío del formulario y valida todos los campos.
    formulario.addEventListener("submit", function (event) {
        event.preventDefault();
        const nombreValido = validarNombre();
        const emailValido = validarEmail();
        const telefonoValido = validarTelefono();
        const paisValido = validarPais();
        const fechaValida = validarFecha();
        const asuntoValido = validarAsunto();
        const mensajeValido = validarMensaje();

        const formularioValido = nombreValido && emailValido && telefonoValido && paisValido && fechaValida && asuntoValido && mensajeValido;
        if (formularioValido) {
            formulario.reset();
            limpiarValidacion();
            mensajeExito.textContent = "¡Formulario enviado exitosamente!";
            mensajeExito.removeAttribute("hidden");
        }
    });
});

