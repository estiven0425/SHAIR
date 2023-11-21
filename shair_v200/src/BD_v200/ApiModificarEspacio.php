<?php

session_start();

header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: PATCH, OPTIONS');
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

if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    // Obtener datos de la solicitud PATCH
    $data = json_decode(file_get_contents("php://input"), true);

    // Verificar si se proporciona el IdEspacio
    if (isset($data['IdEspacio'])) {
        $IdEspacio = $data['IdEspacio'];

        // Obtener el espacio actual
        $result = $conn->query("SELECT * FROM espacio WHERE IdEspacio = $IdEspacio");

        if ($result->num_rows > 0) {
            $espacioData = $result->fetch_assoc();

            // Actualizar el espacio con los nuevos datos proporcionados
            $nombreEspacio = isset($data['NombreEspacio']) ? $data['NombreEspacio'] : $espacioData['NombreEspacio'];
            $descripcionEspacio = isset($data['DescripcionEspacio']) ? $data['DescripcionEspacio'] : $espacioData['DescripcionEspacio'];

            $updateResult = $conn->query("UPDATE espacio SET NombreEspacio = '$nombreEspacio', DescripcionEspacio = '$descripcionEspacio' WHERE IdEspacio = $IdEspacio");

            if ($updateResult) {
                echo json_encode(array("message" => "Espacio actualizado exitosamente", "error" => false));
            } else {
                echo json_encode(array("message" => "Error al actualizar el espacio", "error" => true));
            }
        } else {
            echo json_encode(array("message" => "Espacio no encontrado", "error" => true));
        }
    } else {
        echo json_encode(array("message" => "Falta el parámetro IdEspacio", "error" => true));
    }
} else {
    echo json_encode(array("message" => "Método no permitido", "error" => true));
}

$conn->close();
