// Obtener los elementos
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

// Función para mostrar una sección específica
function mostrarSeccion(seccion) {
    // Ocultar todas las secciones
    onlineTarifas.classList.remove('active');
    presencialTarifas.classList.remove('active');
    formulario.classList.remove('active');
    
    // Mostrar la sección deseada
    seccion.classList.add('active');
}

// Función para mostrar tarifas y ocultar botones de opciones
function mostrarTarifas(tipo) {
    console.log('Tipo seleccionado:', tipo);
    tipoTarifaActual = tipo; // Guardar el tipo de tarifa actual
    document.getElementById('opciones').style.display = 'none';
    
    if (tipo === 'online') {
        mostrarSeccion(onlineTarifas);
    } else if (tipo === 'presencial') {
        mostrarSeccion(presencialTarifas);
    }
}

// Añadir event listeners a los botones
onlineBtn.addEventListener('click', () => mostrarTarifas('online'));
presencialBtn.addEventListener('click', () => mostrarTarifas('presencial'));

// Función para mostrar el formulario con la tarifa seleccionada
function mostrarFormulario(tarifa) {
    console.log('Tarifa seleccionada:', tarifa);
    tarifaSeleccionada.value = `Tarifa seleccionada: ${tarifa}`;
    mostrarSeccion(formulario);
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
    document.getElementById('opciones').style.display = 'block';
});

backToOptionsFromPresencial.addEventListener('click', () => {
    presencialTarifas.classList.remove('active');
    document.getElementById('opciones').style.display = 'block';
});

backToTarifas.addEventListener('click', () => {
    formulario.classList.remove('active');
    if (tipoTarifaActual === 'online') {
        mostrarSeccion(onlineTarifas);
    } else if (tipoTarifaActual === 'presencial') {
        mostrarSeccion(presencialTarifas);
    }
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
    document.getElementById('opciones').style.display = 'block'; // Volver a mostrar los botones de opciones
});
