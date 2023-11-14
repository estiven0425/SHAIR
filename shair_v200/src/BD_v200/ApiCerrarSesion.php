<?php
// ApiCerrarSesion.php
session_start();

// Permite solicitudes desde cualquier origen
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

// Verifica si hay una sesión activa
if (isset($_SESSION['IdUsuario'])) {
    // Destruye todas las variables de sesión
    session_destroy();

    // Responde con un JSON indicando el éxito
    echo json_encode(array("success" => true, "message" => "Sesión cerrada exitosamente"));

    // Agrega un encabezado de redirección
    header('Location: /Home'); // Cambia esto según tu estructura de rutas
    exit(); // Asegura que el script se detenga después de la redirección
} else {
    // Responde con un JSON indicando que no hay sesión activa
    echo json_encode(array("success" => false, "message" => "No hay sesión activa para cerrar"));
}
?>
