const form = document.getElementById('formulario');

if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const nombre = document.getElementById('nombre');
        const edad = document.getElementById('edad');
        const email = document.getElementById('email');
        const mensaje = document.getElementById('mensaje');

        const errorNombre = document.getElementById('error-nombre');
        const errorEdad = document.getElementById('error-edad');
        const errorEmail = document.getElementById('error-email');
        const errorMensaje = document.getElementById('error-mensaje');
        const mensajeExito = document.getElementById('mensaje-exito');

        let isValid = true;

        [nombre, email, mensaje].forEach(campo =>
            campo.classList.remove('campo-error')
        );

        [errorNombre,errorEdad, errorEmail, errorMensaje].forEach(span => {
            span.classList.add('oculto');
            span.textContent = '';
        });

        if (mensajeExito) {
            mensajeExito.classList.add('oculto');
        }

        if (nombre.value.trim() === '') {
            nombre.classList.add('campo-error');
            errorNombre.textContent = 'El nombre es obligatorio.';
            errorNombre.classList.remove('oculto');
            isValid = false;
        }
        if (edad.value.trim() === '') {
            edad.classList.add('campo-error');
            errorEdad.textContent = 'La edad es obligatoria.';
            errorEdad.classList.remove('oculto');
            isValid = false;
        }

        const emailValor = email.value.trim();
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValor);

        if (emailValor === '') {
            email.classList.add('campo-error');
            errorEmail.textContent = 'El email es obligatorio.';
            errorEmail.classList.remove('oculto');
            isValid = false;
        } else if (!emailValido) {
            email.classList.add('campo-error');
            errorEmail.textContent = 'Ingresa un email válido.';
            errorEmail.classList.remove('oculto');
            isValid = false;
        }

        if (mensaje.value.trim() === '') {
            mensaje.classList.add('campo-error');
            errorMensaje.textContent = 'El mensaje no puede estar vacío.';
            errorMensaje.classList.remove('oculto');
            isValid = false;
        }

        if (isValid) {
            form.reset();
            if (mensajeExito) {
                mensajeExito.classList.remove('oculto');
            } else {
                alert('Formulario enviado correctamente');
            }
        }
    });
}
