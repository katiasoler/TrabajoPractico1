// 1. ABRIR MODAL A LOS 3 SEGUNDOS
document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        const modalEl = document.getElementById("newsletterModal");

        if (!modalEl) return;

        const modal = new bootstrap.Modal(modalEl);
        modal.show();

    }, 3000);

});


// 2. VALIDACIÓN DE NEWSLETTER

const formNewsletter = document.getElementById("form-newsletter");
const inputEmail = document.getElementById("email-newsletter");
const msgNewsletter = document.getElementById("msg-newsletter");

formNewsletter.addEventListener("submit", (e) => {
    e.preventDefault(); // Evita que la página se recargue

    const email = inputEmail.value.trim();

    if (email.length < 4 || !email.includes("@")) {
        msgNewsletter.textContent = "Por favor ingresá un email válido.";
        msgNewsletter.style.color = "#e04545";
        return;
    }

    msgNewsletter.textContent = `¡Gracias! Vas a recibir noticias en ${email}.`;
    msgNewsletter.style.color = "#57db74";

    inputEmail.value = "";
});