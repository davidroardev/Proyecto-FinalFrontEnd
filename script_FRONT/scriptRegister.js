
// Contraseña
document.addEventListener('DOMContentLoaded', () => {
    const pass = document.getElementById("password"),
        icon = document.querySelector(".bi1");

    icon.addEventListener("click", () => {
        if (pass.type === "password") {
            pass.type = "text";
            icon.classList.remove('bi-eye-fill')
            icon.classList.add('bi-eye-slash-fill')
        } else {
            pass.type = "password";
            icon.classList.add('bi-eye-fill')
            icon.classList.remove('bi-eye-slash-fill')
        }
    });
});

// Confirmar Contraseña
document.addEventListener('DOMContentLoaded', () => {
    const pass = document.getElementById("password1"),
        icon = document.querySelector(".bi2");

    icon.addEventListener("click", () => {
        if (pass.type === "password") {
            pass.type = "text";
            icon.classList.remove('bi-eye-fill')
            icon.classList.add('bi-eye-slash-fill')
        } else {
            pass.type = "password";
            icon.classList.add('bi-eye-fill')
            icon.classList.remove('bi-eye-slash-fill')
        }
    });
});