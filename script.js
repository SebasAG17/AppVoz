document.getElementById('leer').addEventListener('click', () => {
    const texto = document.getElementById('texto').value;
    if (texto.trim() === '') {
        alert('Por favor escribe algo para leer en voz alta.');
        return;
    }
    const mensaje = new SpeechSynthesisUtterance(texto);
    mensaje.lang = 'es-ES'; // Configura el idioma a español
    speechSynthesis.speak(mensaje);
});

// Botón para borrar el texto
document.getElementById('borrar').addEventListener('click', () => {
    document.getElementById('texto').value = ''; // Limpia el contenido
});