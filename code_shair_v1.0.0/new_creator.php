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
            color: rgb(255, 255, 255); /*Colorde texto*/
            padding: 10px 20px; /*margen interno vertical y horizontal*/
            border: 2px groove rgb(115, 135, 214); /*Borde*/
            border-radius: 8px; /*Radio de las esquinas*/
            cursor: pointer; /*Estilo de puntero*/
            margin: 15px 0px 0px 0px; /*margen superior, derecho, inferior, izquierdo*/
        }

        #new_creator input[type="submit"]:hover { /*Estilo para el botón al posar el mouse encima*/
            background-color: rgb(20, 50, 134); /*Color de fonrdo*/
        }

    </style> <!--Fin de estilos-->

    <title>Unirse a SHAIR</title> <!--ITítulo de la página-->

</head> <!--Fin de la cabeza-->

<body> <!--Inicio del cuerpo del proyecto-->

    <div id="new_creator"> <!--Contenedor de registro-->
        
        <h1>¡Únete a SHAIR!</h1> <!--Título del contenedor-->

        <form method="post"> <!--Inicio formulario-->
            <label for="nombre">Nombre:</label> <!--Campo de formulario-->
            <input type="text" name="nombre" placeholder="Ingresa tu nombre de usuario" required> <!--Espacio para ingresar datos tipo texto, tiene nombre "nombre" y texto de explicación, es obligatorio-->
            
            <label for="descripcion">Descripción:</label> <!--Campo de formulario-->
            <input type="text" name="descripcion" placeholder="Ingresa una descripción" required></input> <!--Espacio para ingresar datos tipo texto, tiene nombre "descripción" y texto de explicación, es obligatorio-->

            <label for="correo">Correo:</label> <!--Campo de formulario-->
            <input type="email" id="data_creator" name="correo" placeholder="Ingresa tu correo" required> <!--Espacio para ingresar datos tipo email, tiene nombre "correo" y texto de explicación, es obligatorio-->

            <input type="submit" name="crear" value="¡Unirte!">  <!--Botón para enviar formulario con nombre "crear" y muestra en el botón "¡Unirte!"-->
            
        </form> <!--Fin formulario-->

        <?php //Código PHP
        
        $conexion = new mysqli('localhost', 'root', '', 'shair_v1.1.2_test'); // Conectar a la base de datos (ubicación, usuario, contraseña, base de datos)

        if ($conexion->connect_error) { //Si condicional que verifica si existe la variable
            die('Error en la conexión: ' . $conexion->connect_error); //Finalizar script y mostrar este mensaje
        } //Fin si

        // Si ese Sí no se cumple, se ignora

        if (isset($_POST['crear'])) { //Si condicional que verifica con isset que existe la variable $_POST con el nombre crear, esto verifica si se envió un formulario o se accionó el botón con ese nombre
            $nombre = $_POST['nombre']; //Crea una variable con el valor enviado a un input con este nombre
            $descripcion = $_POST['descripcion']; //Crea una variable con el valor enviado a un input con este nombre
            $correo = $_POST['correo']; //Crea una variable con el valor enviado a un input con este nombre

            $sql = "INSERT INTO creador (nombre, descripcion, correo) VALUES ('$nombre', '$descripcion', '$correo')"; //Crea una consulta SQL que trata de insertar los valores de las variables ya declaradas en PHP

            if ($conexion->query($sql) === TRUE) { //Si la inyección de datos es satisfactoria
                echo '<p>¡Bienvenido a SHAIR!</p>'; //Mostrar este mensaje
            } else { //Si no
                echo 'Error al registrar: ' . $conexion->error; //Mostrar este mensaje
            } //Fin si la inyección de datos es satisfactoria
        } //Fin si existe la variable $_POST

        $conexion->close(); // Cerrar la conexión
        ?> <!--Fin código PHP-->
        
    </div> <!--Fin div de registro-->

</body> <!--Fin cuerpo de del proyecto-->

</html> <!--Fin código HTML-->
