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

// Obtener los botones de volver
const backToOptionsFromOnline = document.getElementById('backToOptionsFromOnline');
const backToOptionsFromPresencial = document.getElementById('backToOptionsFromPresencial');
const backToTarifas = document.getElementById('backToTarifas');

// Variable para almacenar el tipo de tarifa actual
let tipoTarifaActual = '';

// Función para mostrar tarifas y ocultar botones de opciones
function mostrarTarifas(tipo) {
    console.log('Tipo seleccionado:', tipo);
    tipoTarifaActual = tipo; // Guardar el tipo de tarifa actual
    document.getElementById('opciones').classList.add('hidden');
    
    // Ocultar todas las secciones de tarifas y formulario
    onlineTarifas.classList.add('hidden');
    presencialTarifas.classList.add('hidden');
    formulario.classList.add('hidden');

    // Esperar un pequeño retraso para asegurar que el formulario esté oculto antes de mostrar tarifas
    setTimeout(() => {
        if (tipo === 'online') {
            onlineTarifas.classList.remove('hidden');
            setTimeout(() => {
                onlineTarifas.classList.add('active');
            }, 10); // Pequeño retraso para permitir que la transición se aplique
        } else if (tipo === 'presencial') {
            presencialTarifas.classList.remove('hidden');
            setTimeout(() => {
                presencialTarifas.classList.add('active');
            }, 10); // Pequeño retraso para permitir que la transición se aplique
        }
    }, 10);
}

// Añadir event listeners a los botones
onlineBtn.addEventListener('click', () => mostrarTarifas('online'));
presencialBtn.addEventListener('click', () => mostrarTarifas('presencial'));

// Función para mostrar el formulario con la tarifa seleccionada
function mostrarFormulario(tarifa) {
    console.log('Tarifa seleccionada:', tarifa);
    tarifaSeleccionada.value = `Tarifa seleccionada: ${tarifa}`;
    onlineTarifas.classList.remove('active');
    presencialTarifas.classList.remove('active');
    
    // Preparar formulario para animar a la posición correcta
    formulario.classList.remove('hidden');
    formulario.classList.add('active');
}

// Event listeners para los botones de reserva
botonesReserva.forEach((boton, index) => {
    boton.addEventListener('click', () => {
        mostrarFormulario(index + 1);
    });
});

// Event listeners para los botones de volver
backToOptionsFromOnline.addEventListener('click', () => {
    onlineTarifas.classList.remove('active');
    document.getElementById('opciones').classList.remove('hidden');
});

backToOptionsFromPresencial.addEventListener('click', () => {
    presencialTarifas.classList.remove('active');
    document.getElementById('opciones').classList.remove('hidden');
});

backToTarifas.addEventListener('click', () => {
    formulario.classList.remove('active');
    formulario.classList.add('hidden'); // Ocultar formulario
    if (tipoTarifaActual === 'online') {
        onlineTarifas.classList.add('active');
    } else if (tipoTarifaActual === 'presencial') {
        presencialTarifas.classList.add('active');
    }
    document.getElementById('opciones').classList.remove('hidden');
});

// Configuración del manejador de eventos del formulario
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const descripcion = document.getElementById('descripcion').value;
    const fecha = document.getElementById('fecha').value;
    const tarifa = tarifaSeleccionada.value;

    // Aquí se puede añadir el código para enviar el email
    // Esto generalmente se haría mediante una llamada a un backend
    // Por ejemplo, usando un servicio como EmailJS

    alert(`Formulario enviado. Nos pondremos en contacto contigo pronto. ${tarifa}`);

    // Limpiar el formulario
    form.reset();
    formulario.classList.remove('active');
    formulario.classList.add('hidden'); // Ocultar formulario
    document.getElementById('opciones').classList.remove('hidden'); // Volver a mostrar los botones de opciones
});
