<?php
// ApiCerrarSesion.php

// Permite solicitudes desde cualquier origen
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Inicia la sesión
session_start();

// Destruye todas las variables de sesión
session_destroy();

// Responde con un JSON indicando el éxito
echo json_encode(array("success" => true, "message" => "Sesión cerrada exitosamente"));
?>
