<?php
// ApiCerrarSesion.php
session_start();
error_log(print_r($_SESSION, true));

// Permite solicitudes desde cualquier origen
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Verifica si hay una sesión activa
if (isset($_SESSION['IdUsuario'])) {
    // Destruye todas las variables de sesión
    session_destroy();

    // Responde con un JSON indicando el éxito
    echo json_encode(array("success" => true, "message" => "Sesión cerrada exitosamente"));
} else {
    // Responde con un JSON indicando que no hay sesión activa
    echo json_encode(array("success" => false, "message" => "No hay sesión activa para cerrar"));
}
?>
