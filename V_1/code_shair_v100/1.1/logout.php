<?php
session_start();

// Destruir todas las variables de sesión
session_destroy();

// Redirigir al usuario a la página de inicio de sesión o a donde desees
header("Location: index_p.php"); // Cambia esto a la página que desees
exit();
?>
