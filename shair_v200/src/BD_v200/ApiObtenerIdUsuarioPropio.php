<?php

// Iniciar o reanudar la sesión
session_start();

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

session_set_cookie_params(0, '/', $_SERVER['HTTP_HOST'], false, true);
error_log(print_r($_SESSION, true));



// Verificar si el usuario ha iniciado sesión

if (session_status() === PHP_SESSION_ACTIVE && isset($_SESSION['IdUsuario'])) {
    $IdUsuario = $_SESSION['IdUsuario'];
    echo json_encode(array("IdUsuario" => $IdUsuario));
} else {
    echo json_encode(array("message" => "Usuario no autenticado", "error" => true));
}


?>
