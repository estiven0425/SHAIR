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

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents("php://input"), true);

    if (
        isset($data['NombreCrearEspacioEspacio'], $data['DescripcionEspacio'])
    ) {

        // Campos recibidos desde la solicitud
        $NombreCrearEspacio = $data['NombreCrearEspacio'];
        $DescripcionEspacio = $data['DescripcionEspacio'];
        $DireccionEspacio = ['Nula'];
        $IdUsuario = ['29'];

            $insertQuery = $conn->prepare("INSERT INTO espacio (NombreEspacio, DescripcionEspacio, DireccionEspacio, IdUsuario) VALUES (?, ?, Nula, '29')");
            $insertQuery->bind_param("sssss", $NombreEspacio, $DescripcionEspacio);

            if ($insertQuery->execute()) {
                echo json_encode(array("message" => "Espacio Creado con éxito"));
            } else {
                echo json_encode(array("message" => "Error al crear la cuenta: " . $insertQuery->error, "error" => true));
            }

            $insertQuery->close();
        }
        $checkUsernameQuery->close();
        $checkEmailQuery->close();
    } else {
        echo json_encode(array("message" => "Datos incompletos o inválidos", "error" => true));
    }


$conn->close();
?>
