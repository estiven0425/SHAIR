<?php
    session_start(); // Inicia la sesión si aún no está iniciada

    if (isset($_POST['crear'])) {
        // Verifica si se ha enviado una imagen
        if ($_FILES['imagen_perfil']['error'] === UPLOAD_ERR_OK) {
            // Ruta donde se guardarán las imágenes (debes configurar esto)
            $uploadDir = 'C:/xampp/htdocs/SHAIR-main/creators/';
    
            // Nombre del archivo de imagen (puedes cambiar esto si lo deseas)
            $uploadFile = $uploadDir . basename($_FILES['imagen_perfil']['name']);
    
            // Mueve la imagen cargada al directorio de destino
            if (move_uploaded_file($_FILES['imagen_perfil']['tmp_name'], $uploadFile)) {
                // La imagen se ha cargado exitosamente, ahora puedes guardar su información en la base de datos
                $imagen_perfil = $_FILES['imagen_perfil']['name'];
                $creador_id = $_SESSION['id_creador']; // Utiliza el ID del creador almacenado en la sesión
    
                // Conecta a la base de datos (debes configurar esto)
                $conn = new mysqli("localhost", "root", "", "shair_v1.1.2_test");
    
                // Verifica la conexión
                if ($conn->connect_error) {
                    die("Error de conexión: " . $conn->connect_error);
                }
    
                // Consulta SQL para actualizar la imagen del perfil del usuario
                $sql = "UPDATE creador SET perfil_imagen = '$imagen_perfil' WHERE id_creador = '$creador_id'";
    
                if ($conn->query($sql) === TRUE) {
                    // Actualización exitosa
                    $_SESSION['imagen_perfil'] = $imagen_perfil; // Actualiza la variable de sesión
                    echo "La imagen se ha subido y actualizado.";
                } else {
                    echo "Error al subir la imagen: " . $conn->error;
                }
    
                // Cierra la conexión a la base de datos
                $conn->close();
            } else {
                echo "Error al subir la imagen.";
            }
        } else {
            echo "No se ha seleccionado una imagen válida.";
        }
    }
?>

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

        #new_creator .tittle { /*Estilo del título*/
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

        #new_creator input[type="file"] { /*Estilo para los input tipo texto*/
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

    <title>SHAIR|Foto de perfil</title> <!--ITítulo de la página-->

</head> <!--Fin de la cabeza-->

<body> <!--Inicio del cuerpo del proyecto-->

    <div id="new_creator"> <!--Contenedor de registro-->
        
        <h1 class="tittle">Sube tu foto de perfil</h1> <!--Título del contenedor-->

        <form method="post" id="photo" enctype="multipart/form-data">

            <label for="imagen_perfil" class="imagen_perfil">Foto de perfil</label>
            <input type="file" id="correo" name="imagen_perfil" placeholder="Sube tu foto" required>

            <input type="submit" name="crear" value="¡Subir!">

        </form>
        
    </div> <!--Fin div de registro-->

</body> <!--Fin cuerpo de del proyecto-->

</html> <!--Fin código HTML-->
