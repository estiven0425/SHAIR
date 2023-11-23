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

// Verificar la solicitud POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // Cambia json_decode a $_POST para manejar datos de formulario
  $DenunciasA = $_POST['DenunciasA'];
  $MotivoDenunciaA = $_POST['MotivoDenunciaA'];
  $AceptaCondiciones = $_POST['AceptaCondiciones'];
  $IdUsuario = '1'; // Establecer el IdUsuario como '26'
  $nombrePerfil = $_GET['nombrePerfil'] ?? '';

  // Puedes validar y sanitizar los datos aquí según tus necesidades

  // Crear la consulta SQL
  $sql = "INSERT INTO denunciar (DenunciasA, MotivoDenunciaA, IdUsuario)
          VALUES ('$nombrePerfil', '$MotivoDenunciaA', '$IdUsuario')";

  // Ejecutar la consulta
  if ($conn->query($sql) === TRUE) {
    // Enviar una respuesta JSON si es exitoso
    echo json_encode(['success' => true, 'message' => 'Denunciar realizada con éxito']);
  } else {
    // Enviar una respuesta JSON si hay un error
    echo json_encode(['success' => false, 'message' => 'Error al denunciar esta cuenta']);
  }

  // Cerrar la conexión a la base de datos
  $conn->close();
}

