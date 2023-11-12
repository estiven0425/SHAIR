<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
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

    if (isset($data['EmailUsuario'], $data['ContraseñaUsuario']) && filter_var($data['EmailUsuario'], FILTER_VALIDATE_EMAIL)) {

        // Campos recibidos desde la solicitud
        $EmailUsuario = $data['EmailUsuario'];
        $ContraseñaUsuario = $data['ContraseñaUsuario'];

        // Verificar si el usuario existe
        $checkUserQuery = $conn->prepare("SELECT * FROM usuario WHERE EmailUsuario = ?");
        $checkUserQuery->bind_param("s", $EmailUsuario);
        $checkUserQuery->execute();
        $userResult = $checkUserQuery->get_result();

        if ($userResult->num_rows > 0) {
            $userRow = $userResult->fetch_assoc();

            if (password_verify($ContraseñaUsuario, $userRow['ContraseñaUsuario'])) {
                session_start();
                $_SESSION['IdUsuario'] = $userRow['IdUsuario'];
                echo json_encode(array("message" => "Inicio de sesión exitoso"));
            } else {
                echo json_encode(array("message" => "Uno de los campos es incorrecto", "error" => true));
            }            
        } else {
            echo json_encode(array("message" => "Usuario no encontrado", "error" => true));
        }

        $checkUserQuery->close();
    } else {
        echo json_encode(array("message" => "Datos incompletos o inválidos", "error" => true));
    }
}

$conn->close();
?>
