// Obtener los botones y secciones de tarifas
const onlineBtn = document.getElementById('onlineBtn');
const presencialBtn = document.getElementById('presencialBtn');
const onlineTarifas = document.getElementById('onlineTarifas');
const presencialTarifas = document.getElementById('presencialTarifas');
const formulario = document.getElementById('formulario');
const form = document.getElementById('contactForm');

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
            mostrarFormulario(); // Muestra el formulario al seleccionar una tarifa
        } else {
            onlineTarifas.style.display = 'none';
            onlineBtn.classList.remove('active');
            formulario.style.display = 'none'; // Oculta el formulario si se ocultan las tarifas
        }
    } else if (tipo === 'presencial') {
        if (presencialTarifas.style.display === 'none' || presencialTarifas.style.display === '') {
            presencialTarifas.style.display = 'block';
            onlineTarifas.style.display = 'none';
            presencialBtn.classList.add('active');
            onlineBtn.classList.remove('active');
            mostrarFormulario(); // Muestra el formulario al seleccionar una tarifa
        } else {
            presencialTarifas.style.display = 'none';
            presencialBtn.classList.remove('active');
            formulario.style.display = 'none'; // Oculta el formulario si se ocultan las tarifas
        }
    }
}

// Función para mostrar el formulario
function mostrarFormulario(tipo, tarifa) {
    formulario.style.display = 'block';
}

// Configuración del manejador de eventos del formulario
form.addEventListener('submit', function (event) {
    event.preventDefault();
    const email = document.getElementById('email').value;
    const descripcion = document.getElementById('descripcion').value;
    const fecha = document.getElementById('fecha').value;

    // Aquí se puede añadir el código para enviar


    // Aquí se puede añadir el código para enviar el email
    // Esto generalmente se haría mediante una llamada a un backend
    // Por ejemplo, usando un servicio como EmailJS

    alert('Formulario enviado. Nos pondremos en contacto contigo pronto.');

    // Limpiar el formulario
    form.reset();
    formulario.style.display = 'none';
});
