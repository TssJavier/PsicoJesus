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
document.getElementById('opciones').style.display = 'block';
onlineTarifas.style.opacity = '0';
presencialTarifas.style.opacity = '0';
formulario.style.opacity = '0';

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

    if (tipo === 'online') {
        onlineTarifas.classList.add('active');
        presencialTarifas.classList.remove('active');
    } else if (tipo === 'presencial') {
        presencialTarifas.classList.add('active');
        onlineTarifas.classList.remove('active');
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
    onlineTarifas.classList.remove('active');
    presencialTarifas.classList.remove('active');
    formulario.classList.add('active');
}

// Event listeners para los botones de volver
backToOptionsFromOnline.addEventListener('click', function () {
    onlineTarifas.classList.remove('active');
    document.getElementById('opciones').style.display = 'block';
});

backToOptionsFromPresencial.addEventListener('click', function () {
    presencialTarifas.classList.remove('active');
    document.getElementById('opciones').style.display = 'block';
});

backToTarifas.addEventListener('click', function () {
    formulario.classList.remove('active');
    if (tipoTarifaActual === 'online') {
        onlineTarifas.classList.add('active');
    } else if (tipoTarifaActual === 'presencial') {
        presencialTarifas.classList.add('active');
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
