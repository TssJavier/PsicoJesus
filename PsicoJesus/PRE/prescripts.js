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

// Asegurarse de que las secciones de tarifas están ocultas inicialmente
onlineTarifas.classList.add('hidden');
presencialTarifas.classList.add('hidden');
formulario.classList.remove('active');

// Añadir event listeners a los botones
onlineBtn.addEventListener('click', function () {
    console.log('Botón Online clicado');
    mostrarTarifas('online');
});

presencialBtn.addEventListener('click', function () {
    console.log('Botón Presencial clicado');
    mostrarTarifas('presencial');
});

// Función para mostrar tarifas y ocultar botones de opciones
function mostrarTarifas(tipo) {
    console.log('Tipo seleccionado:', tipo);
    tipoTarifaActual = tipo; // Guardar el tipo de tarifa actual
    document.getElementById('opciones').style.display = 'none';

    // Ocultar todas las secciones de tarifas y formulario
    onlineTarifas.classList.add('hidden');
    presencialTarifas.classList.add('hidden');
    formulario.classList.remove('active');

    if (tipo === 'online') {
        onlineTarifas.classList.remove('hidden');
    } else if (tipo === 'presencial') {
        presencialTarifas.classList.remove('hidden');
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
    console.log('Tarifa seleccionada:', tarifa);
    tarifaSeleccionada.value = `Tarifa seleccionada: ${tarifa}`;
    
    // Ocultar tarifas y mostrar formulario
    onlineTarifas.classList.add('hidden');
    presencialTarifas.classList.add('hidden');
    
    formulario.classList.add('active');
}

// Event listeners para los botones de volver
backToOptionsFromOnline.addEventListener('click', () => {
    onlineTarifas.classList.add('hidden');
    document.getElementById('opciones').style.display = 'block';
});

backToOptionsFromPresencial.addEventListener('click', () => {
    presencialTarifas.classList.add('hidden');
    document.getElementById('opciones').style.display = 'block';
});

backToTarifas.addEventListener('click', () => {
    formulario.classList.remove('active');
    if (tipoTarifaActual === 'online') {
        onlineTarifas.classList.remove('hidden');
    } else if (tipoTarifaActual === 'presencial') {
        presencialTarifas.classList.remove('hidden');
    }
});

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

    alert(`Formulario enviado. Nos pondremos en contacto contigo pronto. ${tarifa}`);

    // Limpiar el formulario
    form.reset();
    formulario.classList.remove('active');
    document.getElementById('opciones').style.display = 'block'; // Volver a mostrar los botones de opciones
});
