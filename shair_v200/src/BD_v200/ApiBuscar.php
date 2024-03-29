<?php
// Conectar a tu base de datos (reemplaza los valores con los tuyos)
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "shair_v200";

$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Recibir el término de búsqueda desde el frontend
$searchTerm = $_GET['q'];

// Consultar la base de datos
$sql = "SELECT * FROM espacio WHERE NombreEspacio LIKE '%$searchTerm%'";
$result = $conn->query($sql);

// Procesar y devolver los resultados como JSON
$results = array();
while ($row = $result->fetch_assoc()) {
    $results[] = $row;
}

echo json_encode($results);

// Cerrar la conexión
$conn->close();
