<?php
// ApiCheckSesion.php
session_start();

// Configuración de CORS
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

// Verificar si el usuario ha iniciado sesión
if (session_status() === PHP_SESSION_ACTIVE && isset($_SESSION['IdUsuario'])) {
    $userId = $_SESSION['IdUsuario'];
    echo json_encode(array("IdUsuario" => $userId));
} else {
    echo json_encode(array("message" => "Usuario no autenticado", "error" => true));
}

// Registrar información de sesión y usuario (puedes eliminar esto en producción)
error_log('Estado de la sesión: ' . session_status());
error_log('ID del Usuario en la sesión: ' . $_SESSION['IdUsuario']);
?>
