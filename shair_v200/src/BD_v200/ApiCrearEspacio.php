<?php
// session_start();

// header('Access-Control-Allow-Origin: http://localhost:3000');
// header('Access-Control-Allow-Methods: GET, POST, OPTIONS');
// header('Access-Control-Allow-Headers: Content-Type');
// header('Access-Control-Allow-Credentials: true');
// header('Content-Type: application/json');

// $servername = "localhost";
// $username = "root";
// $password = "";
// $dbname = "shair_v200";

// $conn = new mysqli($servername, $username, $password, $dbname);

// // Verificar la solicitud POST
// if ($_SERVER['REQUEST_METHOD'] === 'POST') {
//   $data = json_decode(file_get_contents("php://input"), true);

//   // Recibir los datos del formulario
//   $NombreEspacio = $_POST['NombreEspacio'];
//   $DescripcionEspacio = $_POST['DescripcionEspacio'];
//   $AceptaCondiciones = $_POST['AceptaCondiciones'];
//   $IdUsuario = $_SESSION['IdUsuario']; // Asegúrate de que tengas la sesión iniciada

//   // Puedes validar y sanitizar los datos aquí según tus necesidades

//   // Crear la consulta SQL
//   $sql = "INSERT INTO espacio (NombreEspacio, DescripcionEspacio, IdUsuario)
//           VALUES ('$NombreEspacio', '$DescripcionEspacio', '26')";

//   // Ejecutar la consulta
//   if ($conn->query($sql) === TRUE) {
//     // Enviar una respuesta JSON si es exitoso
//     echo json_encode(['success' => true, 'message' => 'Espacio creado con éxito']);
//   } else {
//     // Enviar una respuesta JSON si hay un error
//     echo json_encode(['success' => false, 'message' => 'Error al crear el espacio']);
//   }

//   // Cerrar la conexión a la base de datos
//   $conn->close();
// }

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
  $data = json_decode(file_get_contents("php://input"), true);

  // Recibir los datos del formulario
  $NombreEspacio = $data['NombreEspacio'];
  $DescripcionEspacio = $data['DescripcionEspacio'];
  $AceptaCondiciones = $data['AceptaCondiciones'];
  $IdUsuario = '1'; // Establecer el IdUsuario como '26'

  // Puedes validar y sanitizar los datos aquí según tus necesidades

  // Crear la consulta SQL
  $sql = "INSERT INTO espacio (NombreEspacio, DescripcionEspacio, IdUsuario)
          VALUES ('$NombreEspacio', '$DescripcionEspacio', '$IdUsuario')";

  // Ejecutar la consulta
  if ($conn->query($sql) === TRUE) {
    // Enviar una respuesta JSON si es exitoso
    echo json_encode(['success' => true, 'message' => 'Espacio creado con éxito']);
  } else {
    // Enviar una respuesta JSON si hay un error
    echo json_encode(['success' => false, 'message' => 'Error al crear el espacio']);
  }

  // Cerrar la conexión a la base de datos
  $conn->close();
}
