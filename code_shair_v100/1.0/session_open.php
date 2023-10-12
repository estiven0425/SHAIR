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

        #login { /*Estilo al bloque de subida*/
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

        #login h1 { /*Estilo del título*/
            color: rgb(228, 224, 20); /*Color de texto*/
            margin: auto;
            text-align: center; /*Alineamo el texto al centro*/
            text-shadow: 1px 1px 2px rgb(0, 0, 0); /*Sombra de texto*/
        }

        #login form { /*Estilo del formulario*/
            align-items: center; /*Alineamos verticalmente en el centro*/
            display: flex; /*Pantalla flexible*/
            flex-direction: column; /*Ordenamos verticalmente*/
            justify-content: space-around; /*Se ubican con espacio entre ellos y el borde*/
            padding: 10px; /*Borde interno*/
            text-align: center; /*Alineamos el texto al centro*/
        }

        #login input[type="email"] { /*Estilo para los input tipo email*/
            border: 1px groove rgb(135, 155, 224); /*Borde*/
            border-radius: 10px; /*Radio de las esquinas*/
            box-shadow: 0 0 20px rgba(30, 55, 114, 0.550); /*Sombra*/
            margin: auto; /*Margen*/
            padding: 5px; /*Borde interno*/
            width: 100%; /*Tamaño*/
        }

        #login input[type="password"] {
            border: 1px groove rgb(135, 155, 224); /*Borde*/
            border-radius: 10px; /*Radio de las esquinas*/
            box-shadow: 0 0 20px rgba(30, 55, 114, 0.550); /*Sombra*/
            margin: auto; /*Margen*/
            padding: 5px; /*Borde interno*/
            width: 100%; /*Tamaño*/
        }

        #login input[type="submit"] { /*Estilo para el botón confirmar*/
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

        #login input[type="submit"]:hover { /*Estilo para el botón al posar el mouse encima*/
            transform: scale(1.1);
        }

    </style> <!--Fin de estilos-->

    <title>iniciar sesión</title> <!--ITítulo de la página-->

</head> <!--Fin de la cabeza-->

<body> <!--Inicio del cuerpo del proyecto-->

    <div id="login"> <!--Contenedor de registro-->
        
        <h1>Iniciar sesión</h1> <!--Título del contenedor-->

        <form method="POST">
                
            <label for="correo">Correo Electrónico:</label>
            <input type="email" id="correo" name="correo" required>

            <label for="contrasena">Contraseña:</label>
            <input type="password" id="contrasena" name="contrasena" required>

            <input type="submit" value="Iniciar Sesión">
            
        </form>    
        
    </div> <!--Fin div de registro-->

</body> <!--Fin cuerpo de del proyecto-->

</html> <!--Fin código HTML-->
