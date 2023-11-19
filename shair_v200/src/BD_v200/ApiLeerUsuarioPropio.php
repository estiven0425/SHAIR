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
    if (isset($_GET['IdUsuario'])) {
        // Obtener datos específicos del Usuario
        $IdUsuario = $_GET['IdUsuario'];
        $result = $conn->query("SELECT * FROM Usuario WHERE IdUsuario = $IdUsuario");

        if ($result->num_rows > 0) {
            $UsuarioData = $result->fetch_assoc();
            echo json_encode($UsuarioData);
        } else {
            echo json_encode(array());
        }
    } else {
        echo json_encode(array("message" => "Falta el parámetro IdUsuario", "error" => true));
    }
} else {
    echo json_encode(array("message" => "Método no permitido", "error" => true));
}

$conn->close();
?>
