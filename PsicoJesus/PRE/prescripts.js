document.addEventListener('DOMContentLoaded', (event) => {
    // Obtener la sección de metodología
    const metodologia = document.getElementById('metodologia');

    // Obtener los botones y secciones de tarifas
    const onlineBtn = document.getElementById('onlineBtn');
    const presencialBtn = document.getElementById('presencialBtn');
    const onlineTarifas = document.getElementById('onlineTarifas');
    const presencialTarifas = document.getElementById('presencialTarifas');
    const formulario = document.getElementById('formulario');
    const form = document.getElementById('contactForm');
    const tarifaSeleccionada = document.getElementById('tarifaSeleccionada');

    // Obtener los botones de reserva
    const botonesReserva = document.querySelectorAll('.reserva-btn');

    // Obtener los botones de volver
    const backToOptionsFromOnline = document.getElementById('backToOptionsFromOnline');
    const backToOptionsFromPresencial = document.getElementById('backToOptionsFromPresencial');
    const backToTarifas = document.getElementById('backToTarifas');

    // Obtener el contenedor de carga
    const loadingContainer = document.getElementById('loading');

    // Variable para almacenar el tipo de tarifa actual
    let tipoTarifaActual = '';

    // Función para mostrar el contenedor de carga
    function showLoading() {
        loadingContainer.style.display = 'flex';
        setTimeout(() => {
            loadingContainer.style.display = 'none';
        }, 500); // 0.5 segundos
    }

    // Función para mostrar tarifas y ocultar botones de opciones
    function mostrarTarifas(tipo) {
        tipoTarifaActual = tipo; // Guardar el tipo de tarifa actual
        document.getElementById('opciones').style.display = 'none';

        // Ocultar todas las secciones de tarifas y formulario
        onlineTarifas.classList.remove('active');
        presencialTarifas.classList.remove('active');
        formulario.classList.remove('active');

        // Ocultar la sección de metodología
        metodologia.style.display = 'none';

        // Asegurarse de que el formulario y tarifas estén ocultos
        formulario.style.display = 'none';

        if (tipo === 'online') {
            onlineTarifas.style.display = 'block';
            setTimeout(() => {
                onlineTarifas.classList.add('active');
            }, 5);
        } else if (tipo === 'presencial') {
            presencialTarifas.style.display = 'block';
            setTimeout(() => {
                presencialTarifas.classList.add('active');
            }, 5);
        }
    }

    // Añadir event listeners a los botones
    onlineBtn.addEventListener('click', () => {
        showLoading(); // Mostrar el contenedor de carga antes de mostrar tarifas
        setTimeout(() => {
            mostrarTarifas('online');
        }, 500); // Mostrar tarifas después de que el contenedor de carga se haya ocultado
    });

    presencialBtn.addEventListener('click', () => {
        showLoading(); // Mostrar el contenedor de carga antes de mostrar tarifas
        setTimeout(() => {
            mostrarTarifas('presencial');
        }, 500); // Mostrar tarifas después de que el contenedor de carga se haya ocultado
    });

    // Función para mostrar el formulario con la tarifa seleccionada
    function mostrarFormulario(tarifa) {
        tarifaSeleccionada.value = `Tarifa seleccionada: ${tarifa}`;

        // Ocultar tarifas antes de mostrar el formulario
        onlineTarifas.classList.remove('active');
        presencialTarifas.classList.remove('active');
        onlineTarifas.style.display = 'none';
        presencialTarifas.style.display = 'none';

        // Mostrar el formulario
        formulario.style.display = 'block';
        setTimeout(() => {
            formulario.classList.add('active');
        }, 5);
    }

    // Event listeners para los botones de reserva
    botonesReserva.forEach((boton) => {
        boton.addEventListener('click', () => {
            showLoading(); // Mostrar el contenedor de carga antes de mostrar el formulario
            setTimeout(() => {
                mostrarFormulario(boton.getAttribute('data-tarifa'));
            }, 500); // Mostrar formulario después de que el contenedor de carga se haya ocultado
        });
    });

    // Event listeners para los botones de volver
    backToOptionsFromOnline.addEventListener('click', () => {
        showLoading(); // Mostrar el contenedor de carga antes de volver a opciones
        setTimeout(() => {
            onlineTarifas.classList.remove('active');
            onlineTarifas.style.display = 'none';
            document.getElementById('opciones').style.display = 'block';
            metodologia.style.display = 'block'; // Mostrar la sección de metodología nuevamente
        }, 500); // Ajusta el tiempo si es necesario
    });

    backToOptionsFromPresencial.addEventListener('click', () => {
        showLoading(); // Mostrar el contenedor de carga antes de volver a opciones
        setTimeout(() => {
            presencialTarifas.classList.remove('active');
            presencialTarifas.style.display = 'none';
            document.getElementById('opciones').style.display = 'block';
            metodologia.style.display = 'block'; // Mostrar la sección de metodología nuevamente
        }, 500); // Ajusta el tiempo si es necesario
    });

    backToTarifas.addEventListener('click', () => {
        showLoading(); // Mostrar el contenedor de carga antes de volver a las tarifas
        setTimeout(() => {
            formulario.classList.remove('active');
            formulario.style.display = 'none';

            if (tipoTarifaActual === 'online') {
                onlineTarifas.classList.add('active');
                onlineTarifas.style.display = 'block';
            } else if (tipoTarifaActual === 'presencial') {
                presencialTarifas.classList.add('active');
                presencialTarifas.style.display = 'block';
            }
        }, 500); // Ajusta el tiempo si es necesario
    });

    // Event listener para el formulario
    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const email = document.getElementById('email').value;
        const descripcion = document.getElementById('descripcion').value;
        const fecha = document.getElementById('fecha').value;
        const tarifa = tarifaSeleccionada.value;
        const privacy = document.getElementById('privacy');
        const telefono = document.getElementById('telefono').value;

        // Verificar si la casilla de privacidad está marcada
        if (!privacy.checked) {
            Swal.fire({
                title: 'Error',
                text: 'Debes aceptar la política de privacidad y el aviso legal para continuar.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return; // Salir de la función sin enviar el formulario
        }

        // Mostrar el contenedor de carga antes de enviar el formulario
        showLoading();
        
        // Aquí se puede añadir el código para enviar el email
        // Esto generalmente se haría mediante una llamada a un backend
        // Por ejemplo, usando un servicio como EmailJS

        // Datos para enviar el correo
        const templateParams = {
            from_email: email,
            from_telefono: telefono,
            from_descripcion: descripcion,
            from_fecha: fecha,
            from_tarifa: tarifa
        };

        // Enviar el correo usando EmailJS
        emailjs.send('service_fwwgiqv', 'template_wz3vzks', templateParams)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
                Swal.fire({
                    title: '¡Enviado!',
                    text: 'Gracias por su mensaje. Nos pondremos en contacto con usted pronto.',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            })
            .catch((error) => {
                console.log('FAILED...', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Hubo un problema al enviar su mensaje. Por favor, inténtelo nuevamente más tarde.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            })
            .finally(() => {
                // Limpiar el formulario
                form.reset();
                formulario.classList.remove('active');
                formulario.style.display = 'none';

                // Agregar un retraso antes de mostrar las opciones y metodología
                setTimeout(() => {
                    // Volver a mostrar los botones de opciones y metodología
                    document.getElementById('opciones').style.display = 'block';
                    metodologia.style.display = 'block';
                }, 500); // Esperar 0.5 segundos antes de mostrar las secciones
            });
    });
});
