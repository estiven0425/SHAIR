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
    if (isset($_GET['userId'])) {
        // Obtener datos del usuario y sus espacios
        $userId = $_GET['userId'];
        $result = $conn->query("SELECT usuario.*, espacio.* FROM usuario
                                LEFT JOIN espacio ON usuario.IdUsuario = espacio.IdUsuario
                                WHERE usuario.IdUsuario = $userId");

        if ($result->num_rows > 0) {
            $userData = array();

            while ($row = $result->fetch_assoc()) {
                $userData[] = $row;
            }

            echo json_encode($userData);
        } else {
            echo json_encode(array());
        }
    } else {
        echo json_encode(array("message" => "Falta el parámetro userId", "error" => true));
    }
} else {
    echo json_encode(array("message" => "Método no permitido", "error" => true));
}

$conn->close();
?>
