<?php

session_start();

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shair_v200";

$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Conexión fallida, intente de nuevo más tarde: " . $conn->connect_error);
}

if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    // Obtener datos de la tabla "espacio" y unir con la tabla "usuario"
    $result = $conn->query("SELECT espacio.*, usuario.NombreUsuario FROM espacio
                            INNER JOIN usuario ON espacio.IdUsuario = usuario.IdUsuario");

    if ($result->num_rows > 0) {
        $espacioData = array();

        while ($row = $result->fetch_assoc()) {
            $espacioData[] = $row;
        }

        echo json_encode($espacioData);
    } else {
        echo json_encode(array());
    }
} else {
    echo json_encode(array("message" => "Método no permitido", "error" => true));
}

$conn->close();
