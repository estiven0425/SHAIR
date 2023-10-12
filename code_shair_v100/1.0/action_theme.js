// Obtén el botón por su ID
const miBoton = document.getElementById('theme');

// Agrega un manejador de eventos para el clic en el botón
miBoton.addEventListener('click', function() {
    // Verifica el contenido actual del botón
    if (miBoton.innerHTML === '<img src="http://localhost/SHAIR-main/elements/sun.svg" alt="">') {
        // Cambia el contenido del botón cuando se hace clic
        miBoton.innerHTML = '<img src="http://localhost/SHAIR-main/elements/dark.svg" alt="">';
    } else {
        // Puedes restablecer el contenido a su estado original si es necesario
        miBoton.innerHTML = '<img src="http://localhost/SHAIR-main/elements/sun.svg" alt="">';
    }
});
