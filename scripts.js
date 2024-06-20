document.addEventListener('DOMContentLoaded', function() {
    const termsContainer = document.getElementById('terms-container');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');
    const closeModalButton = document.getElementById('close-button');
    
    // Array de términos y descripciones (ejemplo)
    const terms = [
        { term: "Domótica", description: "Automatización de dispositivos y sistemas dentro del hogar." },
        { term: "IoT", description: "Internet de las Cosas: red de dispositivos interconectados." },
        // Agregar los otros 58 términos aquí...
    ];
    
    // Generar los términos en la página
    terms.forEach((item, index) => {
        const termElement = document.createElement('div');
        termElement.classList.add('term');
        termElement.textContent = item.term;

        termElement.addEventListener('click', () => {
            // Mostrar el modal con la descripción correspondiente
            document.getElementById('modal-term').textContent = item.term;
            document.getElementById('modal-description').textContent = item.description;
            modal.style.display = 'flex'; // Mostrar el modal
            modalContent.style.animation = 'slide-down 0.5s ease'; // Animación de entrada
        });

        termsContainer.appendChild(termElement);
    });

    // Cerrar el modal al hacer clic en el botón de cerrar
    closeModalButton.addEventListener('click', () => {
        modalContent.style.animation = 'fade-in 0.3s ease'; // Animación de salida
        setTimeout(() => {
            modal.style.display = 'none'; // Ocultar el modal
        }, 300);
    });

    // Cerrar el modal si se hace clic fuera del contenido
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modalContent.style.animation = 'fade-in 0.3s ease'; // Animación de salida
            setTimeout(() => {
                modal.style.display = 'none'; // Ocultar el modal
            }, 300);
        }
    });
});
