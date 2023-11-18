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
    if (isset($_GET['IdEspacio'])) {
        // Obtener datos específicos del espacio
        $IdEspacio = $_GET['IdEspacio'];
        $result = $conn->query("SELECT * FROM espacio WHERE IdEspacio = $IdEspacio");

        if ($result->num_rows > 0) {
            $espacioData = $result->fetch_assoc();
            echo json_encode($espacioData);
        } else {
            echo json_encode(array());
        }
    } else {
        echo json_encode(array("message" => "Falta el parámetro IdEspacio", "error" => true));
    }
} else {
    echo json_encode(array("message" => "Método no permitido", "error" => true));
}

$conn->close();
?>
