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

    // Verificar si se proporciona el IdUsuario
    if (isset($data['IdUsuario'])) {
        $IdUsuario = $data['IdUsuario'];

        // Obtener el Usuario actual
        $stmt = $conn->prepare("SELECT * FROM usuario WHERE IdUsuario = ?");
        $stmt->bind_param("i", $IdUsuario);
        $stmt->execute();
        $result = $stmt->get_result();
        $stmt->close();

        if ($result->num_rows > 0) {
            $UsuarioData = $result->fetch_assoc();

            // Actualizar el Usuario con los nuevos datos proporcionados
            $nombreUsuario = isset($data['NombreUsuario']) ? $data['NombreUsuario'] : $UsuarioData['NombreUsuario'];
            $descripcionUsuario = isset($data['DescripcionUsuario']) ? $data['DescripcionUsuario'] : $UsuarioData['DescripcionUsuario'];

            $stmt = $conn->prepare("UPDATE usuario SET NombreUsuario = ?, DescripcionUsuario = ? WHERE IdUsuario = ?");
            $stmt->bind_param("ssi", $nombreUsuario, $descripcionUsuario, $IdUsuario);
            $updateResult = $stmt->execute();
            $stmt->close();

            if ($updateResult) {
                echo json_encode(array("message" => "Usuario actualizado exitosamente", "error" => false));
            } else {
                echo json_encode(array("message" => "Error al actualizar el Usuario", "error" => true));
            }
        } else {
            echo json_encode(array("message" => "Usuario no encontrado", "error" => true));
        }
    } else {
        echo json_encode(array("message" => "Falta el parámetro IdUsuario", "error" => true));
    }
} else {
    echo json_encode(array("message" => "Método no permitido", "error" => true));
}

$conn->close();
?>