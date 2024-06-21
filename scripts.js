const terms = [
    { term: "Automatización", description: "Proceso de utilizar tecnología para realizar tareas de forma automática, sin intervención humana. La automatización en el hogar incluye desde el control de luces y temperatura hasta la gestión de dispositivos de seguridad." },
    { term: "IoT (Internet de las Cosas)", description: "Red de dispositivos físicos que se comunican e intercambian datos a través de internet. El IoT en la domótica permite la conectividad y el control remoto de diversos aparatos dentro de una casa inteligente." },
    { term: "Sensores", description: "Dispositivos que detectan y responden a algún tipo de entrada del entorno físico. Los sensores en la domótica incluyen desde detectores de movimiento y humo hasta medidores de temperatura y humedad." },
    { term: "Sistema de Energía Solar", description: "Tecnología que utiliza paneles solares para generar electricidad en una vivienda. El sistema de energía solar es una forma sostenible y eficiente de alimentar dispositivos en una casa inteligente." },
    { term: "Automatización de Puertas", description: "Sistema que permite abrir y cerrar puertas automáticamente por comodidad o seguridad. La automatización de puertas es una característica clave en los sistemas de seguridad doméstica." },
    { term: "Sensor de Humedad", description: "Dispositivo que mide la humedad del aire y puede activar otros dispositivos en respuesta. Los sensores de humedad son útiles para ajustar automáticamente el sistema de riego en jardines inteligentes." },
    { term: "Automatización de Persianas", description: "Sistema que permite controlar la apertura y cierre de persianas de forma automática. La automatización de persianas es ideal para regular la luz natural y mejorar la eficiencia energética." },
    { term: "Domótica", description: "Tecnología que integra sistemas de automatización para controlar dispositivos electrónicos y electrodomésticos en un hogar. La domótica permite la gestión eficiente de recursos y mejora la comodidad del usuario." },
    { term: "Red de Sensores", description: "Conjunto de dispositivos de detección distribuidos que se comunican entre sí para recoger y transmitir datos. Una red de sensores en la domótica permite monitorizar el entorno y mejorar la respuesta automática de los sistemas." },
    { term: "Casa Inteligente", description: "Vivienda equipada con dispositivos electrónicos conectados que permiten automatizar tareas y gestionar recursos de manera eficiente. Una casa inteligente mejora la seguridad, el confort y la eficiencia energética." },
    { term: "Integración de Sistemas", description: "Proceso de unir diferentes tecnologías y sistemas para trabajar juntos de manera armoniosa. La integración de sistemas en la domótica facilita el control centralizado y la interoperabilidad de dispositivos." },
    { term: "Automatización de Climatización", description: "Control automático de sistemas de calefacción, ventilación y aire acondicionado para mantener condiciones óptimas de confort y eficiencia energética." },
    { term: "Control de Accesos", description: "Sistemas de seguridad que gestionan quién puede entrar o salir de un edificio, utilizando tecnologías como lectores de huellas digitales, tarjetas de acceso y sistemas de reconocimiento facial." },
    { term: "Automatización de Iluminación", description: "Uso de tecnología para controlar automáticamente las luces en una vivienda, permitiendo ajustes según la hora del día, la ocupación de habitaciones o la cantidad de luz natural disponible." },
    { term: "Dispositivos de Control Remoto", description: "Aparatos que permiten manejar otros dispositivos a distancia, a través de señales inalámbricas como infrarrojos, radiofrecuencia o Wi-Fi." },
    { term: "Sistema de Audio Multiroom", description: "Tecnología que permite reproducir música en varias habitaciones de forma sincronizada o independiente, controlada desde un único dispositivo o aplicación." },
    { term: "Cámaras de Seguridad", description: "Dispositivos de vigilancia que graban y transmiten video en tiempo real para la supervisión y protección de áreas específicas dentro y fuera del hogar." },
    { term: "Sistema de Riego Inteligente", description: "Automatización del riego de jardines y céspedes, ajustando los tiempos y cantidades de agua según las condiciones meteorológicas y la humedad del suelo." },
    { term: "Asistentes de Voz", description: "Dispositivos controlados por comandos de voz que pueden realizar tareas, responder preguntas y controlar otros dispositivos inteligentes en el hogar." },
    { term: "Control de Consumo Energético", description: "Sistemas que monitorean y gestionan el uso de energía en una vivienda, proporcionando datos y sugerencias para mejorar la eficiencia y reducir costos." },
    { term: "Automatización de Cortinas", description: "Sistemas que permiten abrir y cerrar cortinas automáticamente, ajustándose a la luz solar, la hora del día o las preferencias del usuario." },
    { term: "Dispositivos Wearables", description: "Tecnología vestible que puede controlar o interactuar con otros dispositivos inteligentes, como relojes inteligentes o bandas de fitness." },
    { term: "Sistema de Alarma", description: "Conjunto de dispositivos diseñados para detectar intrusiones y alertar a los propietarios y servicios de seguridad, mejorando la protección del hogar." },
    { term: "Enchufes Inteligentes", description: "Dispositivos que permiten controlar el encendido y apagado de aparatos eléctricos a través de aplicaciones móviles o asistentes de voz." },
    { term: "Automatización de Ventanas", description: "Tecnología que permite abrir y cerrar ventanas automáticamente para optimizar la ventilación y la eficiencia energética del hogar." },
    { term: "Sensores de Movimiento", description: "Dispositivos que detectan el movimiento en un área determinada, utilizados para seguridad, automatización de iluminación y otros sistemas." },
    { term: "Control de Humedad", description: "Sistemas que regulan los niveles de humedad en el hogar, utilizando deshumidificadores o humidificadores según sea necesario." },
    { term: "Dispositivos de Cocina Inteligente", description: "Aparatos de cocina conectados que pueden ser controlados y monitoreados a distancia, mejorando la eficiencia y la seguridad." },
    { term: "Sistema de Videovigilancia", description: "Red de cámaras y dispositivos que permiten supervisar y grabar video de diversas áreas del hogar, accesible en tiempo real desde cualquier lugar." },
    { term: "Cerraduras Inteligentes", description: "Sistemas de cierre y apertura de puertas que pueden ser controlados a distancia, proporcionando mayor seguridad y comodidad." },
    { term: "Control de Temperatura", description: "Automatización de sistemas de calefacción y refrigeración para mantener temperaturas óptimas en el hogar, mejorando el confort y la eficiencia energética." }
];

const termsContainer = document.getElementById('terms');

terms.forEach(term => {
    let termElement = document.createElement('div');
    termElement.classList.add('term');
    termElement.setAttribute('data-description', term.description);
    termElement.innerHTML = `<h2>${term.term}</h2><p>${term.description.split('.')[0]}.</p>`;
    termsContainer.appendChild(termElement);
});

document.getElementById('search').addEventListener('input', function() {
    let searchTerm = this.value.toLowerCase();
    let terms = document.querySelectorAll('.term');

    terms.forEach(function(term) {
        let termTitle = term.querySelector('h2').textContent.toLowerCase();
        if(termTitle.includes(searchTerm)) {
            term.style.display = '';
        } else {
            term.style.display = 'none';
        }
    });
});

document.querySelectorAll('.term').forEach(item => {
    item.addEventListener('click', function() {
        let title = this.querySelector('h2').textContent;
        let description = this.getAttribute('data-description');
        showModal(title, description);
    });
});

function showModal(title, description) {
    document.getElementById('modalTitle').textContent = title;
    document.getElementById('modalDescription').textContent = description;
    document.getElementById('myModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('myModal').style.display = 'none';
}
