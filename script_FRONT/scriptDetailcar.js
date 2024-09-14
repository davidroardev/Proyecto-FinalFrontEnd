document.addEventListener('DOMContentLoaded', function() {
    const contactBtn = document.getElementById('adviser__contact--btn');
    const messageContainer = document.getElementById('message-container');

    contactBtn.addEventListener('click', function() {
        // Mostrar mensaje simple o formulario de contacto
        const userResponse = confirm('Si desea más información, puede proporcionar su número de teléfono y un asesor se comunicará con usted?');

        if (userResponse) {
            const phoneNumber = prompt('Por favor, ingrese su número de teléfono:');
            if (phoneNumber) {
                const contactMethod = confirm('¿Prefiere ser contactado por teléfono. Cancelar para WhatsApp.');
                messageContainer.innerHTML = `<p>Gracias, nos pondremos en contacto con usted por ${contactMethod ? 'teléfono' : 'WhatsApp'}.</p>`;
            } else {
                messageContainer.innerHTML = `<p>Para más información, por favor complete el formulario en la página.</p>`;
            }
        } else {
            messageContainer.innerHTML = `<p>Si desea registrarse para recibir información de novedades, por favor complete el formulario en la sección Registro de nuestro menú.</p>`;
        }
    });
});
