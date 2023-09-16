<!DOCTYPE html> <!--Tipo de documento-->

<html lang="es"> <!--Idioma de la página-->

<head> <!--Cabeza-->

    <meta charset="UTF-8"> <!--Tipo de caracteres UTF-8-->

    <link rel="shortcut icon" href="http://localhost/SHAIR/elements/logo_alternativo.png" type="image/x-icon"> <!--Icono de shair-->

    <style> /*Indexación de CSS (No recomendado a excepción de este caso)*/

        @import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Kalam:wght@300&display=swap');/*Importamos las fuentes*/

        * {  
            font-family: 'Carter One', cursive;/*Tipo de letra para toda la página*/
        }

        body { /*Estilo para el body e hijos*/
            align-items: center; /*Alineamos de manera vertical en el centro*/
            background-color: rgba(40, 65, 224, 0.100); /*Color de fondo*/
            font-family: 'Carter One', cursive;/*Tipo de letra para toda la página*/
            display: flex; /*Display flexible*/
            justify-content: center; /*Alineamos de manera horizontal en el centro*/
            margin: 0px; /*Quitamos margen por defecto*/
            padding: 10px; /*Quitamos padding por defecto*/
        }

        #new_archive { /*Estilo al bloque de subida*/
            align-items: center; /*Alineamos en el centro vertical*/
            background: radial-gradient(circle, rgb(190, 200, 244) 0%, rgba(40, 65, 224) 100%); /*Color de fondo*/
            border:  solid 2px rgb(135, 155, 224); /*Estilo, grosor y color de borde*/
            border-radius: 25px; /*Radio de las esquinas*/
            box-shadow: 0 0 20px rgba(30, 55, 214); /*Sombra*/
            display: flex; /*Display flexible*/
            flex-direction: column; /*Dirección vertical*/
            flex-wrap: nowrap; /*Permitimos que se repitan filas*/
            height: 400px; /*Altura*/
            justify-content: center; /*Alineamos en el centro horizontal*/
            margin: 25px; /*Margen*/
            padding: 20px; /*Margen interno*/
            width: 400px; /*Ancho*/
        }

        #new_archive h1 { /*Estilo del título*/
            color: rgb(228, 224, 20); /*Color de texto*/
            margin: auto;
            text-align: center; /*Alineamo el texto al centro*/
            text-shadow: 1px 1px 2px rgb(0, 0, 0); /*Sombra de texto*/
        }

        #new_archive form { /*Estilo del formulario*/
            align-items: center; /*Alineamos verticalmente en el centro*/
            display: flex; /*Pantalla flexible*/
            flex-direction: column; /*Ordenamos verticalmente*/
            justify-content: space-around; /*Se ubican con espacio entre ellos y el borde*/
            padding: 10px; /*Borde interno*/
            text-align: center; /*Alineamos el texto al centro*/
        }

        #new_creator input[type="text"] { /*Estilo para los input tipo texto*/
            border: 1px groove rgb(135, 155, 224); /*Borde*/
            border-radius: 10px; /*Radio de las esquinas*/
            box-shadow: 0 0 20px rgba(30, 55, 114, 0.550); /*Sombra*/
            margin: auto; /*Margen*/
            padding: 5px; /*Borde interno*/
            width: 100%; /*Tamaño*/
        }

        #new_archive input[type="file"] { /*Estilo para los input tipo email*/
            align-items: center;
            border: 1px groove rgb(135, 155, 224); /*Borde*/
            border-radius: 10px; /*Radio de las esquinas*/
            box-shadow: 0 0 20px rgba(30, 55, 114, 0.550); /*Sombra*/
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 100%;
            margin: auto; /*Margen*/
            padding: 5px; /*Borde interno*/
            width: 100%; /*Tamaño*/
        }

        #new_archive input[type="submit"] { /*Estilo para el botón confirmar*/
            align-items: center; /*Alineamos verticalmente*/
            background-color: rgba(30, 55, 114, 0.550);
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            border-radius: 8px; /*Radio de las esquinas*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            color: rgb(228, 224, 20);
            cursor: pointer; /*Cursor cambia al estar sobre*/
            margin: 15px 0px 0px 0px; /*margen superior, derecho, inferior, izquierdo*/
            padding: 10px 20px; /*margen interno vertical y horizontal*/
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
            text-transform: uppercase;
            transition: transform 0.3s ease-in-out; /*Transición para agrandar*/
        }

        #new_archive input[type="submit"]:hover { /*Estilo para el botón al posar el mouse encima*/
            transform: scale(1.1);
        }

    </style> <!--Fin de estilos-->

    <title>Subir archivo a SHAIR</title> <!--ITítulo de la página-->

</head> <!--Fin de la cabeza-->

<body> <!--Inicio del cuerpo del proyecto-->

    <div id="new_archive"> <!--Contenedor de registro-->
        
        <h1>Subir Archivo</h1>

        <form method="post" enctype="multipart/form-data">

            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" id="nombre_archivo" required>
            
            <label for="archivo_producto">Selecciona un Archivo:</label>
            <input type="file" name="archivo_producto" id="archivo_producto"  required>

            <input type="submit" name="subir_archivo" value="Subir Archivo">
        </form>

        <?php
        $conexion = new mysqli('localhost', 'root', '', 'shair_v1.1.2_test');

        if ($conexion->connect_error) {
            die('Error en la conexión: ' . $conexion->connect_error);
        }

        if (isset($_POST['subir_archivo'])) {
            // Obtener el archivo subido
            $archivo_nombre = $_FILES['archivo_producto']['name'];
            $archivo_tmp = $_FILES['archivo_producto']['tmp_name'];

            // Obtener el nombre del archivo ingresado por el usuario
            $nombre = $_POST['nombre'];

            // Leer el archivo
            $archivo_contenido = file_get_contents($archivo_tmp);

            // Escapar el contenido del archivo para evitar problemas de SQL Injection
            $archivo_contenido = $conexion->real_escape_string($archivo_contenido);

            $sql = "INSERT INTO archivo (nombre, archivo_producto) VALUES ('$nombre', '$archivo_contenido')";

            if ($conexion->query($sql) === TRUE) {
                echo '<p>Archivo subido exitosamente</p>';
            } else {
                echo 'Error al subir el archivo: ' . $conexion->error;
            }
        }

        $conexion->close();
        ?>
        
    </div> <!--Fin div de registro-->

</body> <!--Fin cuerpo de del proyecto-->

</html> <!--Fin código HTML-->
