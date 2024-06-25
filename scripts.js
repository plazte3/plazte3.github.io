const terms = [
    {
        term: "Automatización",
        description: "Proceso de utilizar tecnología para realizar tareas de forma automática, sin intervención humana. La automatización en el hogar incluye desde el control de luces y temperatura hasta la gestión de dispositivos de seguridad. Los sistemas automatizados pueden mejorar la eficiencia energética, aumentar la seguridad y proporcionar mayor comodidad a los usuarios. Además, pueden integrarse con otros sistemas inteligentes para ofrecer una experiencia de usuario más cohesiva y personalizada."
    },
    {
        term: "IoT (Internet de las Cosas)",
        description: "Red de dispositivos físicos que se comunican e intercambian datos a través de internet. El IoT en la domótica permite la conectividad y el control remoto de diversos aparatos dentro de una casa inteligente. Los dispositivos IoT pueden incluir desde electrodomésticos y sistemas de seguridad hasta dispositivos de salud y fitness. La interconectividad de estos dispositivos permite una gestión centralizada y una automatización avanzada, mejorando la eficiencia y la funcionalidad del hogar."
    },
    {
        term: "Sensores",
        description: "Dispositivos que detectan y responden a algún tipo de entrada del entorno físico. Los sensores en la domótica incluyen desde detectores de movimiento y humo hasta medidores de temperatura y humedad. Estos sensores recopilan datos en tiempo real y los transmiten a sistemas de control que pueden tomar decisiones automatizadas. Por ejemplo, un sensor de movimiento puede activar luces al detectar presencia, o un sensor de humedad puede ajustar un sistema de riego."
    },
    {
        term: "Sistema de Energía Solar",
        description: "Tecnología que utiliza paneles solares para generar electricidad en una vivienda. El sistema de energía solar es una forma sostenible y eficiente de alimentar dispositivos en una casa inteligente. Estos sistemas pueden integrarse con baterías para almacenar energía y utilizarse durante periodos de baja generación solar. Además de reducir la dependencia de fuentes de energía no renovables, los sistemas de energía solar pueden disminuir significativamente los costos de electricidad."
    },
    {
        term: "Automatización de Puertas",
        description: "Sistema que permite abrir y cerrar puertas automáticamente por comodidad o seguridad. La automatización de puertas es una característica clave en los sistemas de seguridad doméstica. Estos sistemas pueden incluir cerraduras electrónicas que se controlan mediante aplicaciones móviles o asistentes de voz, y pueden integrarse con cámaras de seguridad para ofrecer un control de acceso más completo y seguro."
    },
    {
        term: "Sensor de Humedad",
        description: "Dispositivo que mide la humedad del aire y puede activar otros dispositivos en respuesta. Los sensores de humedad son útiles para ajustar automáticamente el sistema de riego en jardines inteligentes. También pueden utilizarse en interiores para controlar humidificadores o deshumidificadores, asegurando un ambiente confortable y saludable dentro del hogar. Además, pueden ayudar a prevenir daños causados por niveles de humedad excesivos, como el moho."
    },
    {
        term: "Automatización de Persianas",
        description: "Sistema que permite controlar la apertura y cierre de persianas de forma automática. La automatización de persianas es ideal para regular la luz natural y mejorar la eficiencia energética. Estos sistemas pueden programarse para ajustarse automáticamente según la hora del día o las condiciones meteorológicas, y pueden controlarse a distancia mediante aplicaciones móviles, proporcionando comodidad y control adicional."
    },
    {
        term: "Domótica",
        description: "Tecnología que integra sistemas de automatización para controlar dispositivos electrónicos y electrodomésticos en un hogar. La domótica permite la gestión eficiente de recursos y mejora la comodidad del usuario. Los sistemas domóticos pueden incluir la automatización de iluminación, climatización, seguridad y entretenimiento, y pueden integrarse en una plataforma centralizada para un control unificado y simplificado del hogar."
    },
    {
        term: "Red de Sensores",
        description: "Conjunto de dispositivos de detección distribuidos que se comunican entre sí para recoger y transmitir datos. Una red de sensores en la domótica permite monitorizar el entorno y mejorar la respuesta automática de los sistemas. Estas redes pueden incluir sensores de temperatura, humedad, movimiento y más, que trabajan juntos para proporcionar un entorno doméstico más seguro, eficiente y confortable."
    },
    {
        term: "Casa Inteligente",
        description: "Vivienda equipada con dispositivos electrónicos conectados que permiten automatizar tareas y gestionar recursos de manera eficiente. Una casa inteligente mejora la seguridad, el confort y la eficiencia energética. Los sistemas en una casa inteligente pueden incluir la automatización de iluminación, climatización, seguridad, entretenimiento y más, todos controlados desde una plataforma centralizada que permite una gestión unificada y eficiente del hogar."
    },
    {
        term: "Integración de Sistemas",
        description: "Proceso de unir diferentes tecnologías y sistemas para trabajar juntos de manera armoniosa. La integración de sistemas en la domótica facilita el control centralizado y la interoperabilidad de dispositivos. Esto permite que los sistemas de seguridad, iluminación, climatización y otros trabajen juntos para proporcionar una experiencia de usuario más cohesiva y eficiente."
    },
    {
        term: "Automatización de Jardines",
        description: "Uso de tecnología para gestionar automáticamente el riego y el cuidado de plantas en el jardín. La automatización de jardines asegura un riego eficiente y adecuado, reduciendo el consumo de agua y mejorando la salud de las plantas. Estos sistemas pueden incluir sensores de humedad del suelo, sistemas de riego programables y controles remotos, proporcionando un cuidado del jardín más inteligente y eficiente."
    },
    {
        term: "Asistentes de Voz",
        description: "Dispositivos que utilizan reconocimiento de voz para realizar tareas y responder preguntas. Los asistentes de voz en la domótica permiten el control manos libres de dispositivos inteligentes en el hogar. Estos asistentes, como Amazon Alexa o Google Assistant, pueden integrarse con sistemas de iluminación, seguridad, entretenimiento y más, proporcionando una forma intuitiva y conveniente de interactuar con la casa inteligente."
    },
    {
        term: "Seguridad Inteligente",
        description: "Sistemas que utilizan tecnología avanzada para proteger el hogar de intrusos y otros peligros. La seguridad inteligente incluye cámaras de vigilancia, sensores de puertas y ventanas, alarmas y más. Estos sistemas pueden integrarse con aplicaciones móviles para proporcionar alertas en tiempo real y permitir el control remoto, ofreciendo una mayor tranquilidad y protección."
    },
    {
        term: "Iluminación Inteligente",
        description: "Sistema de luces que se pueden controlar de forma remota y programar para ajustarse a diferentes necesidades. La iluminación inteligente mejora la eficiencia energética y proporciona mayor comodidad. Estos sistemas pueden incluir bombillas inteligentes, interruptores conectados y sensores de movimiento, y pueden controlarse mediante aplicaciones móviles, asistentes de voz o automatización programada."
    },
    {
        term: "Red de Área Local (LAN)",
        description: "Conjunto de dispositivos interconectados dentro de una área geográfica limitada, como una casa. Una LAN permite la comunicación y el intercambio de datos entre dispositivos en el hogar. En la domótica, una LAN es crucial para la integración y el control de sistemas inteligentes, proporcionando la infraestructura necesaria para que los dispositivos se comuniquen y funcionen de manera eficiente y coordinada."
    },
    {
        term: "Automatización de Iluminación",
        description: "Control automático de las luces de una vivienda para optimizar el uso de energía y mejorar el confort. La automatización de iluminación puede incluir sensores de movimiento, temporizadores y controles remotos. Estos sistemas permiten ajustar la iluminación según la hora del día, la ocupación de las habitaciones y las preferencias del usuario, proporcionando un ambiente personalizado y eficiente."
    },
    {
        term: "Control de Climatización",
        description: "Sistema que permite ajustar la temperatura y la humedad del hogar automáticamente. El control de climatización mejora el confort y la eficiencia energética. Estos sistemas pueden incluir termostatos inteligentes, sensores de temperatura y humedad, y sistemas de calefacción y refrigeración automatizados, que trabajan juntos para mantener un ambiente interior agradable y eficiente."
    },
    {
        term: "Control de Voz",
        description: "Tecnología que permite operar dispositivos y sistemas mediante comandos hablados. El control de voz en la domótica proporciona una forma conveniente y manos libres de interactuar con la casa inteligente. Los sistemas de control de voz pueden integrarse con asistentes virtuales y otros dispositivos conectados, permitiendo realizar tareas como ajustar la iluminación, controlar la climatización y reproducir música simplemente hablando."
    },
    {
        term: "Programación de Escenas",
        description: "Funcionalidad que permite configurar y activar múltiples dispositivos con un solo comando o en un horario específico. La programación de escenas en la domótica mejora la comodidad y la eficiencia. Por ejemplo, una escena de 'noche de cine' puede ajustar las luces, bajar las persianas y encender el sistema de entretenimiento con un solo comando, creando el ambiente perfecto para ver una película."
    },
    {
        term: "Sistemas de Alarma",
        description: "Conjunto de dispositivos que detectan intrusiones y alertan a los propietarios y servicios de seguridad. Los sistemas de alarma mejoran la protección del hogar. Estos sistemas pueden incluir sensores de puertas y ventanas, detectores de movimiento, alarmas sonoras y notificaciones automáticas, proporcionando una capa adicional de seguridad y tranquilidad a los habitantes del hogar."
    },
    {
        term: "Enchufes Inteligentes",
        description: "Dispositivos que permiten controlar el encendido y apagado de aparatos eléctricos a través de aplicaciones móviles o asistentes de voz. Los enchufes inteligentes facilitan la gestión de dispositivos electrónicos. Estos enchufes pueden programarse para encenderse o apagarse en horarios específicos, monitorizar el consumo de energía y controlarse a distancia, proporcionando una mayor comodidad y eficiencia energética."
    },
    {
        term: "Automatización de Ventanas",
        description: "Tecnología que permite abrir y cerrar ventanas automáticamente para optimizar la ventilación y la eficiencia energética del hogar. La automatización de ventanas puede incluir sensores de temperatura y calidad del aire, y puede integrarse con sistemas de climatización. Esto permite mantener un ambiente interior saludable y confortable, ajustando la ventilación según las necesidades y condiciones del hogar."
    },
    {
        term: "Sensores de Movimiento",
        description: "Dispositivos que detectan el movimiento en un área determinada y pueden activar otros dispositivos en respuesta. Los sensores de movimiento son utilizados para seguridad, automatización de iluminación y otros sistemas en la domótica. Estos sensores pueden activar luces al detectar presencia, enviar alertas de seguridad o activar cámaras de vigilancia, proporcionando una capa adicional de seguridad y conveniencia."
    },
    {
        term: "Control de Humedad",
        description: "Sistemas que regulan los niveles de humedad en el hogar, utilizando deshumidificadores o humidificadores según sea necesario. El control de humedad mejora el confort y la salud del ambiente interior. Estos sistemas pueden incluir sensores de humedad, controles automáticos y dispositivos conectados, que trabajan juntos para mantener niveles de humedad óptimos y prevenir problemas como el moho y la sequedad excesiva."
    },
    {
        term: "Dispositivos de Cocina Inteligente",
        description: "Aparatos de cocina conectados que pueden ser controlados y monitoreados a distancia. Los dispositivos de cocina inteligente mejoran la eficiencia y la seguridad en la cocina. Estos dispositivos pueden incluir hornos, refrigeradores, lavavajillas y otros electrodomésticos inteligentes, que pueden programarse, monitorearse y controlarse mediante aplicaciones móviles, proporcionando una experiencia de cocina más conveniente y segura."
    },
    {
        term: "Sistema de Videovigilancia",
        description: "Red de cámaras y dispositivos que permiten supervisar y grabar video de diversas áreas del hogar. El sistema de videovigilancia proporciona una seguridad mejorada. Estos sistemas pueden incluir cámaras de interior y exterior, grabadores de video y aplicaciones móviles para acceso remoto, permitiendo la supervisión en tiempo real y la grabación de eventos para una mayor seguridad y tranquilidad."
    },
    {
        term: "Cerraduras Inteligentes",
        description: "Sistemas de cierre y apertura de puertas que pueden ser controlados a distancia. Las cerraduras inteligentes proporcionan mayor seguridad y comodidad. Estos sistemas pueden incluir cerraduras electrónicas que se controlan mediante aplicaciones móviles, códigos de acceso o asistentes de voz, ofreciendo un control de acceso seguro y conveniente, y eliminando la necesidad de llaves físicas."
    },
    {
        term: "Control de Temperatura",
        description: "Automatización de sistemas de calefacción y refrigeración para mantener temperaturas óptimas en el hogar. El control de temperatura mejora el confort y la eficiencia energética. Estos sistemas pueden incluir termostatos inteligentes, sensores de temperatura y sistemas de climatización automatizados, que trabajan juntos para mantener un ambiente interior agradable y eficiente, ajustándose automáticamente según las preferencias del usuario."
    }
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
