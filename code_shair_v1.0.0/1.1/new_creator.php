<!DOCTYPE html> <!--Tipo de documento-->

<html lang="es"> <!--Idioma de la página-->

<head> <!--Cabeza-->

    <meta charset="UTF-8"> <!--Tipo de caracteres UTF-8-->

    <style> /*Indexación de CSS (No recomendado a excepción de este caso)*/

        @import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Kalam:wght@300&display=swap');/*Importamos las fuentes*/

        * {  
            font-family: 'Carter One', cursive;/*Tipo de letra para toda la página*/
        }

        body { /*Estilo para el body e hijos*/
            align-items: center; /*Alineamos de manera vertical en el centro*/
            background-color: rgba(40, 65, 224, 0.100); /*Color de fondo*/
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

        #new_creator input[type="password"] { /*Estilo para los input tipo email*/
            border: 1px groove rgb(135, 155, 224); /*Borde*/
            border-radius: 10px; /*Radio de las esquinas*/
            box-shadow: 0 0 20px rgba(30, 55, 114, 0.550); /*Sombra*/
            margin: auto; /*Margen*/
            padding: 5px; /*Borde interno*/
            width: 100%; /*Tamaño*/
        }

        #new_creator input[type="submit"] { /*Estilo para el botón confirmar*/
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

        #new_creator input[type="submit"]:hover { /*Estilo para el botón al posar el mouse encima*/
            transform: scale(1.1);
        }

        #new_creator button {
            background: radial-gradient(circle, rgb(130, 150, 230) 0%, rgb(95, 120, 224) 40%, rgb(25, 55, 220) 100%); /*Color de fondo*/
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            border-radius: 25px; /*Radio de las esquinas*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            color: rgb(228, 224, 20);
            cursor: pointer; /*Tipo de cursor*/
            font-family: 'Kalam', cursive; /*Fuente*/
            font-weight: 900; /*Grosor de letra*/
            margin: 5px; /*Margen*/
            padding: 5px; /*Margen interno*/
            text-align: center; /*Alineamos texto en el centro*/
            text-decoration: none; /*Descativamos la decoración te texto*/
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
            width: 90%; /*Tamaño de los botones en el div*/
            transition: transform 0.3s ease-in-out; /*Transición para agrandar*/
        }

        #new_creator button:hover {
            background: radial-gradient(circle, rgb(130, 150, 230) 0%, rgb(95, 120, 224) 40%, rgb(25, 55, 220) 100%); /*Color de fondo*/
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            color: rgb(228, 224, 20);
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
            transform: scale(1.05);
        }

        #new_creator a {
            background: radial-gradient(circle, rgb(130, 150, 230) 0%, rgb(95, 120, 224) 40%, rgb(25, 55, 220) 100%); /*Color de fondo*/
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            border-radius: 25px; /*Radio de las esquinas*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            color: rgb(228, 224, 20);
            cursor: pointer; /*Tipo de cursor*/
            font-family: 'Kalam', cursive; /*Fuente*/
            font-weight: 900; /*Grosor de letra*/
            margin: 5px; /*Margen*/
            padding: 5px; /*Margen interno*/
            text-align: center; /*Alineamos texto en el centro*/
            text-decoration: none; /*Descativamos la decoración te texto*/
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
            width: 40%; /*Tamaño de los botones en el div*/
            transition: transform 0.3s ease-in-out; /*Transición para agrandar*/
        }

        #new_creator a:hover {
            background: radial-gradient(circle, rgb(130, 150, 230) 0%, rgb(95, 120, 224) 40%, rgb(25, 55, 220) 100%); /*Color de fondo*/
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            color: rgb(228, 224, 20);
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
            transform: scale(1.05);
        }

    </style> <!--Fin de estilos-->

    <script>
        function mostrarMensaje() {
            var formulario = document.querySelector('#new_creator form');
            formulario.style.display = 'none'; // Ocultar el formulario

            var botonRegresar = document.createElement('button');
            botonRegresar.textContent = 'Crear nuevo usuario';
            botonRegresar.addEventListener('click', function () {
                formulario.style.display = 'block'; // Mostrar el formulario nuevamente
                botonRegresar.style.display = 'none'; // Ocultar el botón de regreso
                var titulo = document.querySelector('#new_creator h1');
                titulo.textContent = '¡Únete a SHAIR!'; // Restaurar el texto original
            });

            var contenedorFormulario = document.querySelector('#new_creator');
            contenedorFormulario.appendChild(botonRegresar); // Agregar el botón de regreso

            var titulo = document.querySelector('#new_creator h1');
            titulo.textContent = '¡Te has unido!'; // Cambiar el texto del título

            var enlace = document.createElement('a');
            enlace.href = './index_p.php'; // Ruta al archivo index_p.php
            enlace.textContent = 'Ir a la página principal';
            contenedorFormulario.appendChild(enlace); // Agregar el enlace
        }

    </script>

    <title>Unirse a SHAIR</title> <!--ITítulo de la página-->

</head> <!--Fin de la cabeza-->

<body> <!--Inicio del cuerpo del proyecto-->

    <div id="new_creator"> <!--Contenedor de registro-->
        
        <h1>¡Únete a SHAIR!</h1> <!--Título del contenedor-->

        <form method="post" id="registroForm">
            <label for="nombre">Nombre:</label>
            <input type="text" id="nombre" name="nombre" placeholder="Ingresa tu nombre de usuario" required>

            <label for="contraseña">Contraseña:</label>
            <input type="password" id="contraseña" name="contraseña" placeholder="Ingresa tu contraseña" required>

            <label for="contraseña_confir">Confirmar contraseña:</label>
            <input type="password" id="contraseña_confir" name="contraseña_confir" placeholder="Ingresa tu contraseña" required>

            <label for="descripcion">Descripción:</label>
            <input type="text" id="descripcion" name="descripcion" placeholder="Ingresa una descripción" required>

            <label for="correo">Correo:</label>
            <input type="email" id="correo" name="correo" placeholder="Ingresa tu correo" required>

            <input type="submit" name="crear" value="¡Unirte!">

        </form>

        <?php //Código PHP
        
        $conexion = new mysqli('localhost', 'root', '', 'shair_v1.1.2_test'); // Conectar a la base de datos (ubicación, usuario, contraseña, base de datos)

        if ($conexion->connect_error) { //Si condicional que verifica si existe la variable
            die('Error en la conexión: ' . $conexion->connect_error); //Finalizar script y mostrar este mensaje
        } //Fin si

        // Si ese Sí no se cumple, se ignora

        if (isset($_POST['crear'])) { //Si condicional que verifica con isset que existe la variable $_POST con el nombre crear, esto verifica si se envió un formulario o se accionó el botón con ese nombre
            $nombre = $_POST['nombre']; //Crea una variable con el valor enviado a un input con este nombre
            $contrasena = $_POST['contraseña'];
            $descripcion = $_POST['descripcion']; //Crea una variable con el valor enviado a un input con este nombre
            $correo = $_POST['correo']; //Crea una variable con el valor enviado a un input con este nombre

            // Verificar si el correo ya existe en la base de datos
            $verificarCorreo = "SELECT * FROM creador WHERE correo = '$correo'";
            $resultado = $conexion->query($verificarCorreo);

            if ($resultado->num_rows > 0) {
                // El correo ya está registrado
                echo 'El correo ya está registrado, por favor utiliza otro.';
            } else {
                // El correo no está registrado, se puede insertar en la base de datos
                $sql = "INSERT INTO creador (nombre, contraseña, descripcion, correo) VALUES ('$nombre', '$contrasena', '$descripcion', '$correo')"; //Crea una consulta SQL que trata de insertar los valores de las variables ya declaradas en PHP

                if ($conexion->query($sql) === TRUE) { //Si la inyección de datos es satisfactoria
                    echo '<p>¡Bienvenido a SHAIR!</p>'; //Mostrar este mensaje
                    echo '<script>mostrarMensaje();</script>';
                } else { //Si no
                    echo 'Error al registrar: ' . $conexion->error; //Mostrar este mensaje
                } //Fin si la inyección de datos es satisfactoria
            }
        } //Fin si existe la variable $_POST

        $conexion->close(); // Cerrar la conexión

        ?> <!--Fin código PHP-->

        <script>
            document.addEventListener("DOMContentLoaded", function () {
                const formulario = document.getElementById("registroForm");
                const nombreInput = document.getElementById("nombre");
                const contrasenaInput = document.getElementById("contraseña");
                const contrasenaConfirInput = document.getElementById("contraseña_confir");
                const descripcionInput = document.getElementById("descripcion");
                const correoInput = document.getElementById("correo");

                formulario.addEventListener("submit", function (event) {
                    // Validación del nombre (mínimo 2 caracteres)
                    if (nombreInput.value.length < 2) {
                        alert("El nombre debe tener al menos 2 caracteres.");
                        event.preventDefault();
                        return;
                    }

                    // Validación de contraseña (debe tener al menos 6 letras minúsculas, 2 mayúsculas y 2 símbolos)
                    const contrasena = contrasenaInput.value;
                    const mayusculas = contrasena.match(/[A-Z]/g);
                    const minusculas = contrasena.match(/[a-z]/g);
                    const simbolos = contrasena.match(/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/g);

                    if (
                        (!mayusculas || mayusculas.length < 2) ||
                        (!minusculas || minusculas.length < 6) ||
                        (!simbolos || simbolos.length < 2)
                    ) {
                        alert("La contraseña debe tener al menos 6 letras minúsculas, 2 mayúsculas y 2 símbolos.");
                        event.preventDefault();
                        return;
                    }

                    // Validación de confirmación de contraseña
                    if (contrasenaInput.value !== contrasenaConfirInput.value) {
                        alert("Las contraseñas no coinciden.");
                        event.preventDefault();
                        return;
                    }

                    // Validación de descripción (mínimo 10 caracteres)
                    if (descripcionInput.value.length < 10) {
                        alert("La descripción debe tener al menos 10 caracteres.");
                        event.preventDefault();
                        return;
                    }

                    // Validación de correo (debe contener @)
                    if (!correoInput.value.includes("@")) {
                        alert("El correo debe contener el símbolo @.");
                        event.preventDefault();
                        return;
                    }

                    // Validación de letras mayúsculas activadas en el teclado
                    if (event.getModifierState("CapsLock")) {
                        alert("Las letras mayúsculas están activadas en el teclado.");
                    }
                });
            });
        </script>
        
    </div> <!--Fin div de registro-->

</body> <!--Fin cuerpo de del proyecto-->

</html> <!--Fin código HTML-->
