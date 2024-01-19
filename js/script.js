
document.addEventListener('DOMContentLoaded', function () {

    var contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Evitar que el formulario se envíe automáticamente

        var nombre = document.getElementsByName('name')[0].value;
        var email = document.getElementsByName('email')[0].value;
        var mensaje = document.getElementsByName('message')[0].value;

        var errores = [];

        //valida que haya ingresado un nombre
        if (nombre.trim() === '') {
            errores.push('Por favor, ingresa tu nombre.');
        }

        // validar el formato de un correo electrónico
        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errores.push('Por favor, ingresa un email válido.');
        }
        //valida que haya ingresado un mensaje
        if (mensaje.trim() === '') {
            errores.push('Por favor, ingresa un mensaje.');
        }

        if (errores.length > 0) {
            mostrarErrores(errores);
        } else {
            alert('Formulario enviado con éxito');
            contactForm.reset(); 
        }
    });
});

function mostrarErrores(errores) {
    var mensajeError = 'Error(es):\n';
    for (var i = 0; i < errores.length; i++) {
        mensajeError += '- ' + errores[i] + '\n';
    }
    alert(mensajeError);
}
