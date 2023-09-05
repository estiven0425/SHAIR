<!DOCTYPE html> <!--Tipo de documento-->

<html lang="es"> <!--Idioma de la página-->

<head> <!--Cabeza-->

    <meta charset="UTF-8"> <!--Tipo de caracteres UTF-8-->

    <style> /*Indexación de CSS (No recomendado a excepción de este caso)*/

        @import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Kalam:wght@300&display=swap');/*Importamos las fuentes*/

        body { /*Estilo para el body e hijos*/
            align-items: center; /*Alineamos de manera vertical en el centro*/
            background-color: rgba(40, 65, 224, 0.100); /*Color de fondo*/
            font-family: 'Carter One', cursive;/*Tipo de letra para toda la página*/
            display: flex; /*Display flexible*/
            justify-content: center; /*Alineamos de manera horizontal en el centro*/
            margin: 0px; /*Quitamos margen por defecto*/
            padding: 10px; /*Quitamos padding por defecto*/
        }

        #new_creator { /*Estilo al bloque de subida*/
            align-items: center; /*Alineamos en el centro vertical*/
            background: radial-gradient(circle, rgb(190, 200, 244) 0%, rgb(135, 155, 224) 100%); /*Color de fondo*/
            border:  groove 2px rgb(135, 155, 224); /*Estilo, grosor y color de borde*/
            border-radius: 25px; /*Radio de las esquinas*/
            box-shadow: 0 0 20px rgba(30, 55, 214); /*Sombra*/
            display: flex; /*Display flexible*/
            flex-wrap: wrap; /*Permitimos que se repitan filas*/
            height: 400px; /*Altura*/
            justify-content: center; /*Alineamos en el centro horizontal*/
            margin: 25px; /*Margen*/
            padding: 20px; /*Margen interno*/
            width: 400px; /*Ancho*/
        }

        #new_creator h1 { /*Estilo del título*/
            color: rgb(228, 224, 20); /*Color de texto*/
            margin: auto;
            text-align: center; /*Alineamo el texto al centro*/
            text-shadow: 1px 1px 2px rgb(0, 0, 0); /*Sombra de texto*/
        }

        #new_creator form { /*Estilo del formulario*/
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

        #new_creator input[type="email"] { /*Estilo para los input tipo email*/
            border: 1px groove rgb(135, 155, 224); /*Borde*/
            border-radius: 10px; /*Radio de las esquinas*/
            box-shadow: 0 0 20px rgba(30, 55, 114, 0.550); /*Sombra*/
            margin: auto; /*Margen*/
            padding: 5px; /*Borde interno*/
            width: 100%; /*Tamaño*/
        }

        #new_creator input[type="submit"] { /*Estilo para el botón confirmar*/
            background-color: rgba(30, 55, 114, 0.550);
            box-shadow: 1 1 10px rgba(0, 0, 0); /*Sombra*/
            color: white;
            padding: 10px 20px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            margin: 15px 0px 0px 0px;
        }

        #new_creator input[type="submit"]:hover {
            background-color: rgb(20, 50, 134);
        }

    </style>

    <title>Unirse a SHAIR</title> <!--ITítulo de la página-->

</head>

<body>

    <div id="new_creator">
        
        <h1>¡Únete a SHAIR!</h1>

        <form method="post">
            <label for="nombre">Nombre:</label>
            <input type="text" name="nombre" placeholder="Ingresa tu nombre de usuario" required>
            
            <label for="descripcion">Descripción:</label>
            <input type="text" name="descripcion" placeholder="Ingresa una descripción" required></input>

            <label for="codigo">Código:</label>
            <input type="text" name="codigo" placeholder="Ingresa tu código de seguridad" required>

            <label for="correo">Correo:</label>
            <input type="email" id="data_creator" name="correo" placeholder="Ingresa tu correo" required>

            <label for="apoyo">Apoyo:</label>
            <input type="text" name="apoyo" placeholder="Ingresa tu medio de apoyo" required>

            <input type="submit" name="crear" value="¡Unirte!">
            
        </form>

        <?php
        // Conectar a la base de datos 
        $conexion = new mysqli('localhost', 'root', '', 'shair_v1.1.2_test');

        if ($conexion->connect_error) {
            die('Error en la conexión: ' . $conexion->connect_error);
        }

        // Operación de Creación
        if (isset($_POST['crear'])) {
            $nombre = $_POST['nombre'];
            $descripcion = $_POST['descripcion'];
            $codigo = $_POST['codigo'];
            $correo = $_POST['correo'];
            $apoyo = $_POST['apoyo'];

            $sql = "INSERT INTO creador (nombre, descripcion, codigo, correo, apoyo) VALUES ('$nombre', '$descripcion', $codigo, '$correo', '$apoyo')";
            if ($conexion->query($sql) === TRUE) {
                echo '<p></p>';
            } else {
                echo 'Error al registrar: ' . $conexion->error;
            }
        }

        // Cerrar la conexión
        $conexion->close();
        ?>
        
    </div>

</body>

</html>
