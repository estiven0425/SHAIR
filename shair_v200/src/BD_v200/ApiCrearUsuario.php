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

    if (
        isset($data['Nombre'], $data['NombreUsuario'], $data['EmailUsuario'], $data['ContraseñaUsuario'], $data['DescripcionUsuario']) &&
        filter_var($data['EmailUsuario'], FILTER_VALIDATE_EMAIL)
    ) {

        // Campos recibidos desde la solicitud
        $Nombre = $data['Nombre'];
        $NombreUsuario = $data['NombreUsuario'];
        $EmailUsuario = $data['EmailUsuario'];
        $ContraseñaUsuario = $data['ContraseñaUsuario'];
        $DescripcionUsuario = $data['DescripcionUsuario'];

        // Verificar disponibilidad del nombre de usuario
        $checkUsernameQuery = $conn->prepare("SELECT COUNT(*) AS count FROM usuario WHERE NombreUsuario = ?");
        $checkUsernameQuery->bind_param("s", $NombreUsuario);
        $checkUsernameQuery->execute();
        $usernameResult = $checkUsernameQuery->get_result();
        $usernameRow = $usernameResult->fetch_assoc();

        $usernameCount = $usernameRow['count'];

        // Verificar disponibilidad del correo electrónico
        $checkEmailQuery = $conn->prepare("SELECT COUNT(*) AS count FROM usuario WHERE EmailUsuario = ?");
        $checkEmailQuery->bind_param("s", $EmailUsuario);
        $checkEmailQuery->execute();
        $emailResult = $checkEmailQuery->get_result();
        $emailRow = $emailResult->fetch_assoc();

        $emailCount = $emailRow['count'];

        if ($usernameCount > 0) {
            echo json_encode(array("message" => "¡El nombre de usuario ya está en uso!", "error" => true));
        } elseif ($emailCount > 0) {
            echo json_encode(array("message" => "¡El correo electrónico ya está en uso!", "error" => true, "field" => "email"));
        } else {
            $hashContraseña = password_hash($ContraseñaUsuario, PASSWORD_BCRYPT);

            $insertQuery = $conn->prepare("INSERT INTO usuario (Nombre, NombreUsuario, EmailUsuario, ContraseñaUsuario, DescripcionUsuario) VALUES (?, ?, ?, ?, ?)");
            $insertQuery->bind_param("sssss", $Nombre, $NombreUsuario, $EmailUsuario, $hashContraseña, $DescripcionUsuario);

            if ($insertQuery->execute()) {
                echo json_encode(array("message" => "Cuenta creada con éxito"));
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
}

$conn->close();
?>
