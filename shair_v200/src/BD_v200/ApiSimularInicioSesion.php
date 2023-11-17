<?php
// ApiSimularInicioSesion.php
session_start();

// Configuración de CORS
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

// Simula el inicio de sesión estableciendo algún valor en la sesión
$_SESSION['IdUsuario'] = 29;

// Respuesta exitosa
echo json_encode(array("success" => true));
?>
