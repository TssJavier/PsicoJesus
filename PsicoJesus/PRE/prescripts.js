// Obtener los botones y secciones de tarifas
const onlineBtn = document.getElementById('onlineBtn');
const presencialBtn = document.getElementById('presencialBtn');
const onlineTarifas = document.getElementById('onlineTarifas');
const presencialTarifas = document.getElementById('presencialTarifas');
const formulario = document.getElementById('formulario');
const form = document.getElementById('contactForm');
const tarifaSeleccionada = document.getElementById('tarifaSeleccionada');

// Obtener los botones de reserva
const botonesReserva = document.querySelectorAll('.tarifa button');

// Asegurarse de que las secciones de tarifas están ocultas inicialmente
onlineTarifas.style.display = 'none';
presencialTarifas.style.display = 'none';
formulario.style.display = 'none';

// Añadir event listeners a los botones
onlineBtn.addEventListener('click', function () {
    console.log('Botón Online clicado');
    toggleTarifas('online');
});

presencialBtn.addEventListener('click', function () {
    console.log('Botón Presencial clicado');
    toggleTarifas('presencial');
});

// Función para alternar la visibilidad de las secciones de tarifas
function toggleTarifas(tipo) {
    console.log('Tipo seleccionado:', tipo);
    if (tipo === 'online') {
        if (onlineTarifas.style.display === 'none' || onlineTarifas.style.display === '') {
            onlineTarifas.style.display = 'block';
            presencialTarifas.style.display = 'none';
            onlineBtn.classList.add('active');
            presencialBtn.classList.remove('active');
        } else {
            onlineTarifas.style.display = 'none';
            onlineBtn.classList.remove('active');
        }
    } else if (tipo === 'presencial') {
        if (presencialTarifas.style.display === 'none' || presencialTarifas.style.display === '') {
            presencialTarifas.style.display = 'block';
            onlineTarifas.style.display = 'none';
            presencialBtn.classList.add('active');
            onlineBtn.classList.remove('active');
        } else {
            presencialTarifas.style.display = 'none';
            presencialBtn.classList.remove('active');
        }
    }
}

// Añadir event listeners a los botones de reserva
botonesReserva.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        mostrarFormulario(index + 1);
    });
});

// Función para mostrar el formulario con la tarifa seleccionada
function mostrarFormulario(tarifa) {
    tarifaSeleccionada.value = tarifa;
    formulario.style.display = 'block';
}

// Configuración del manejador de eventos del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const descripcion = document.getElementById('descripcion').value;
    const fecha = document.getElementById('fecha').value;
    const tarifa = tarifaSeleccionada.value;

    // Aquí se puede añadir el código para enviar el email
    // Esto generalmente se haría mediante una llamada a un backend
    // Por ejemplo, usando un servicio como EmailJS

    alert(`Formulario enviado. Nos pondremos en contacto contigo pronto. Tarifa seleccionada: ${tarifa}`);

    // Limpiar el formulario
    form.reset();
    formulario.style.display = 'none';
});
