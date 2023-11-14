<?php

session_start();
session_set_cookie_params(0, '/', $_SERVER['HTTP_HOST'], false, true);
error_log(print_r($_SESSION, true));

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Verificar si el usuario ha iniciado sesión


if (isset($_SESSION['IdUsuario'])) {
    $userId = $_SESSION['IdUsuario'];
    echo json_encode(array("IdUsuario" => $userId));
} else {
    echo json_encode(array("message" => "Usuario no autenticado", "error" => true));
}

?>
