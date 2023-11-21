<?php
// ApiCheckSesion.php
session_start();

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

// Verificar si el usuario ha iniciado sesión
if (session_status() === PHP_SESSION_ACTIVE && isset($_SESSION['IdUsuario'])) {
    $IdUsuario = $_SESSION['IdUsuario'];
    echo json_encode(array("IdUsuario" => $IdUsuario));
} else {
    echo json_encode(array("message" => "Usuario no autenticado", "error" => true));
}
