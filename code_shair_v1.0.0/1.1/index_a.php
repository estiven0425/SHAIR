<!DOCTYPE html> <!--Tipo de documento-->

<html lang="es"> <!--Idioma de la página-->

<head> <!--Cabeza-->

    <meta charset="UTF-8"> <!--Codificación de caracteres-->
    <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!--Zoom de la página en diferentes pantallas-->

    <link rel="shortcut icon" href="http://localhost/shaiR-main/elements/logo_alternativo.png" type="image/x-icon"> <!--Icono de shair-->
    

    <script crossorigin src="https://unpkg.com/react@16/umd/react.development.js"></script> <!--Libreria react-->
    <script crossorigin src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script> <!--Libreria ReactDOM-->
    <script src="https://unpkg.com/babel-core@5.8.38/browser.min.js"></script> <!--Libreria de babel-->

    <style>

        @import url('https://fonts.googleapis.com/css2?family=Carter+One&family=Kalam:wght@300&display=swap');/*Importamos las fuentes*/

        * {
            text-transform: uppercase; /*Convertimos en mayuscula*/
        }

        body { /*Estilo general en el body*/
            font-family: 'Carter One', cursive;/*Tipo de letra para toda la página*/
            margin: 0px; /*Eliminamos el margen predeterminado del navegador*/
        }

        header { /*Estilo al contenedor raiz del header*/
            align-items: center; /*Alineamos de manera vertical en el centro*/
            background: radial-gradient(ellipse, rgb(95, 120, 224) 0%, rgb(45, 75, 224) 100%);/*Color de fondo, con degradado radial en forma de elipse*/
            border: solid 2px rgba(40, 65, 224); /*Borde del header (estilo, grosor y color)*/
            box-shadow: 15px 0px 25px rgb(40, 65, 224); /*Sombra del header*/
            display: flex; /*Hacemos responsive(más o menos) el header*/
            flex-direction: row; /*Hacemos que se organizen los items de forma horizontal*/
            flex-wrap: nowrap; /*Hacemos que sea solo una fila*/
            font-size: large; /*Tamaño letra*/
            font-weight: 300; /*Grosor letra*/
            height: 75px; /*Altura*/
            justify-content: flex-start; /*Alineamos los items al inicio*/
            position: fixed;/*Posición fija*/
            width: 100%; /*Anchura automática*/
            z-index: 2;/*Nivel para superponer*/
        }

        header #logo #show_list { /*Estilo para el espacio del logo*/
            align-items: center; /*Alineamos verticalmente*/
            background-color: rgb(255, 255, 255); /*Color de fondo*/
            border: solid 1px rgba(40, 65, 224); /*Borde del logo(estilo, grosor y color)*/
            border-radius: 100%; /*Redondeamos el ícono*/
            cursor: pointer; /*Cursor cambia al estar sobre*/
            display: flex; /*Damos flexibilidad a este espacio*/
            flex-grow: 0; /*Importancia para aumentar su tamaño*/
            flex-shrink: 0; /*Importancia para disminuir su tamaño*/
            justify-content: center; /*Alineamos horizontalmente*/
            margin-left: 70px; /*Damos un poco de margen*/
            padding: 2px; /*Damos un poco de margen interna*/
            transition: margin-left 0.2s ease-in-out; /*Transición para ocultar*/
        }

        header #logo #show_list:hover { /*Al posar cursor*/
            background-color: rgb(212, 212, 212); /*Color de fondo*/
        }

        header #logo #show_list img {
            border-radius: 100%;
        }

        header #header1 { /*Estilo para el texto del header*/
            color: rgb(228, 224, 20); /*Color de texto*/
            flex-grow: 1; /*Importancia para aumentar su tamaño*/
            flex-shrink: 1; /*Importancia para disminuir su tamaño*/
            font-family: 'Kalam', cursive; /*Fuente para el header*/
            text-align: center; /*Alineamos el texto*/
            text-shadow: 1px 1px 2px rgb(0, 0, 0); /*Sombra de texto*/
        }

        header #login {
            align-items: center; /*Alineamos verticalmente*/
            background: radial-gradient(circle, rgb(130, 150, 230) 0%, rgb(95, 120, 224) 40%, rgb(25, 55, 220) 100%); /*Color de fondo*/
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            border-radius: 25px; /*Redondeamos el ícono*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            color: rgb(228, 224, 20);
            cursor: pointer; /*Cursor cambia al estar sobre*/
            font-family: 'Carter One', cursive;
            font-size: 12px;
            height: 52px;
            margin: 0px 20px 0px 0px;
            padding: 2px; /*Damos un poco de margen interna*/
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
            width: 52px;
            transition: transform 0.3s ease-in-out; /*Transición para agrandar*/
        }

        header #login:hover {
            transform: scale(1.3);
        }

        #lateral_menu { /*Estilo para el menú izquierdo*/
            align-items: center; /*Alineamos horizontalmente en el centro*/
            background-color: rgb(212, 212, 212); /*Color de fondo*/
            box-shadow: 0px 15px 25px rgb(192, 192, 192); /*Sombra del menú*/
            display: flex; /*Display flexible*/
            flex-direction: column; /*dirección vertical para acomodar los items*/
            flex-wrap: nowrap; /*No permitimos multiples columnas*/
            justify-content: space-between; /*Ordenamos verticalmente con espacio entre los objetos*/
            height: 100%; /*Altura al 100%*/
            padding-top: 5%;/*Margen superior*/
            overflow: hidden; /*Ocultamos contenido que se salga*/
            position: fixed; /*Posición fija en la página*/
            transition: max-width 0.2s ease-in-out; /*Transición para ocultar*/
            max-width: 10%; /*Anchura al 10%*/
            z-index: 1;
        }

        #lateral_menu #menu_list button { /*Estilo de los botones*/
            background-color: rgb(255, 255, 255); /*Color de fondo de los botones*/
            border: solid 2px rgb(45, 75, 224); /*Borde*/
            border-radius: 25px; /*Radio de las esquinas*/
            color: rgb(40, 65, 224); /*Color de texto*/
            cursor: pointer; /*Tipo de cursor*/
            font-family: 'Kalam', cursive; /*Fuente*/
            font-weight: 900; /*Grosor de letra*/
            margin: 5px; /*Margen*/
            padding: 5px; /*Margen interno*/
            text-align: center; /*Alineamos texto en el centro*/
            text-decoration: none; /*Descativamos la decoración te texto*/
            width: 90%; /*Tamaño de los botones en el div*/
            transition: transform 0.3s ease-in-out; /*Transición para agrandar*/
        }

        #lateral_menu #menu_list button:hover {
            background: radial-gradient(circle, rgb(130, 150, 230) 0%, rgb(95, 120, 224) 40%, rgb(25, 55, 220) 100%); /*Color de fondo*/
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            color: rgb(228, 224, 20);
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
            transform: scale(1.05);
        }

        #lateral_menu #forum { /*Estilo para los botones del menu lateral*/
            align-items: center; /*Alineamos horizontalmente en el centro*/
            display: flex; /*Display flexible*/
            flex-direction: column; /*Ordenar verticalmente*/
            flex-wrap: nowrap; /*No permite más columnas*/
            height: 100%; /*Altura*/
            justify-content: center; /*Alineados verticalmente en el centro*/
            width: 90%; /*Anchura*/
        }

        #lateral_menu #forum .forum_access { /*Estilo para la vista previa del foro*/
            border: solid 1px rgb(45, 75, 224); /*Borde*/
            height: 70%; /*Altura*/
            margin: 5px; /*Margen*/
            width: 100%; /*Anchura*/
        }

        #lateral_menu #forum a { /*Estilo de los botones*/
            background-color: rgb(255, 255, 255); /*Color de fondo de los botones*/
            border: solid 2px rgb(45, 75, 224); /*Borde*/
            border-radius: 25px; /*Radio de las esquinas*/
            margin: 5px; /*Margen*/
            padding: 5px; /*Margen interno*/
            text-align: center; /*Alineamos texto en el centro*/
            text-decoration: none; /*Descativamos la decoración te texto*/
            text-transform: uppercase; /*Trasnformar en mayúsculas las letras*/
            width: 90%; /*Tamaño de los botones en el div*/
            transition: transform 0.3s ease-in-out; /*Transición para agrandar*/
        }

        #lateral_menu #forum a:hover {
            background: radial-gradient(circle, rgb(130, 150, 230) 0%, rgb(95, 120, 224) 40%, rgb(25, 55, 220) 100%); /*Color de fondo*/
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            color: rgb(228, 224, 20);
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
            transform: scale(1.05);
        }

        #content { /*Estilo para el contenedor principal*/
            align-items: center; /*Alineamos horizontalmente que cubra toda la pantalla*/
            display: flex; /*Caja felxible*/
            flex-direction: column; /*Dirección vertical*/
            flex-wrap: nowrap; /*No más de una columna*/
            justify-content: space-between; /*Espacio vertical entre ellos*/
            transition: padding 0.2s ease-in-out; /*transición del padding al cambiar*/
            padding: 90px 5px 5px 10.3%; /*Padding*/
        }

        #content #name {
            color: rgb(25, 55, 220);
            margin: 0px;
        }

        #content #info {
            align-items: stretch;
            background-color: rgb(212, 212, 212);
            border: solid 2px rgb(40, 65, 224);
            border-radius: 25px;
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            padding: 10px;
        }

        #content #info #desc #photo img {
            background-color: rgb(255, 255, 255);
            border: solid 1px rgb(0, 0, 0);
            border-radius: 10%;
            float: left;
            height: 10%;
            width: 10%;
        }

        #content #info #desc_info {
            margin: 10px;
            padding: 10px 10px 10px 150px;
        }

        #content #info #download {
            align-items: center;
            background-color: rgb(255, 255, 255);
            border: solid 2px rgb(0, 0, 0);
            border-radius: 0px 25px 25px 0px;
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: space-around;
            margin: -12px;
            width: 50%;
        }

        #content #info #download #creator {
            align-self: center;
            background-color: rgb(255, 255, 255);
            border-radius: 100%;
            display: flex;
            flex-direction: column;
            height: 30%;
            justify-content: center;
            padding: 2px;
            width: 25%;
        }

        #content #info #download #creator:hover {
            border: solid 2px rgb(25, 55, 220); /*Borde del logo(estilo, grosor y color)*/
            box-shadow: 0px 0px 10px rgb(25, 55, 220);
            color: rgb(228, 224, 20);
            margin: -2px;
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
        }

        #content #info #download #access {
            align-self: center;
            background: rgb(192, 192, 102); /*Color de fondo*/
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            border-radius: 25px;
            display: flex;
            flex-direction: column;
            height: 20%;
            justify-content: center;
            padding: 2px;
            width: 50%;
        }

        #content #info #download #access:hover {
            background: radial-gradient(circle, rgb(192, 192, 102) 0%, rgb(228, 224, 20) 100%);
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
        }

        #content #info #download #access img {
            height: 100%;
            width: 100%;
        }

        #content #content_list { /*Estilo para el contenido general*/
            align-items: stretch; /*Alineamos items pra que cubran todo verticalmente*/
            display: flex; /*Display flexible*/
            flex-direction: row; /*Dirección horizontal*/
            justify-content: space-between; /*Espacio horizontal entre ellos*/
            width: 100%;
        }

        #content #content_list .list_principal { /* Estilo para la sección de cada tipo de producto*/
            align-items: center; /*Horizontalmente centrados*/
            display: flex; /*Display flexible*/
            flex-direction: column; /*Dirección vertical*/
            flex-wrap: nowrap; /*No más de una columna*/
            justify-content: center; /*Centrado verticalmente*/
            margin: 25px; /*Margen*/
            padding: 10px; /*Padding*/
            width: 100%; /*Anchura*/
        }

        #content #content_list .list_principal .name h1 { /*Estilo para el título de la sección*/
            color: rgb(40, 65, 224); /*Color de texto*/
            text-transform: uppercase; /*Todo en mayúscula*/
        }

        #content #content_list .list_principal .article { /*Estilo para los productos*/
            align-items: center; /*Alineamos verticalmente en el centro*/
            background-color: rgb(255, 255, 255); /*Color de fondo de los botones*/
            border: solid 2px rgb(45, 75, 224); /*Borde*/
            border-radius: 25px; /*Radio de las esquinas*/
            color: rgb(45, 75, 224); /*Color de texto*/
            display: flex; /*display flexible*/
            flex-direction: row; /*Dirección horizontal*/
            flex-wrap: nowrap; /*No más de una fila*/
            justify-content: space-around; /*Espacio alrederor de ellos*/
            margin: 5px; /*Margen*/
            padding: 5px 5px 5px 0px; /*Margen interno*/
            text-align: center; /*Alineamos texto en el centro*/
            text-decoration: none; /*Descativamos la decoración te texto*/
            text-transform: uppercase; /*Trasnformar en mayúsculas las letras*/
            transition: transform 0.3s ease-in-out; /*Transición para agrandar*/
            width: 100%; /*Tamaño de los botones en el div*/
        }

        #content #content_list .list_principal .article:hover {
            background: radial-gradient(circle, rgb(130, 150, 230) 0%, rgb(95, 120, 224) 40%, rgb(25, 55, 220) 100%); /*Color de fondo*/
            border: solid 2px rgb(228, 224, 20); /*Borde del logo(estilo, grosor y color)*/
            box-shadow: 0px 0px 10px rgb(255, 255, 0);
            color: rgb(228, 224, 20);
            text-shadow: 1px 1px 2px rgb(0, 0, 0);
            transform: scale(1.05);
        }

        #content #content_list .list_principal .article img { /*Estilo para la imagen de los productos*/
            border-radius: 15px; /*Radio de las esquinas*/
            height: 90px; /*Altura*/
            padding: 2px; /*Borde interno*/
            width: 90px; /*Anchura*/
        }

    </style>

    <title>SHAIR|</title> <!--Título de la página-->

</head> <!--Fin de la cabeza-->

<body> <!--Cuerpo de la página-->

    <header> <!--Cabecera-->

        <div id="logo"> <!--Espacio para el logo-->
            <button id="show_list"><img src="http://localhost/shaiR-main/elements/logo_alternativo.png" alt="Logo de SHAIR" height="50px" width="50px"></button> <!--Logo-->
        </div> <!--Fin de espacio para el logo-->

        <div id="header1"> <!--Espacio para el título-->
            <h1>Shair</h1> <!--Título-->
        </div> <!--Fin de espacio para el título-->

    </header> <!--Fin de la cabecera-->

    <section id="lateral_menu"> <!--Menú lateral-->

        <div id="menu_list"> <!--Lista de menus-->

            <button id="list_la">aplicaciones</button> <!--Acceso a lista-->
            <button id="list_lj">juegos</button> <!--Acceso a lista-->
            <button id="list_lc">creadores</button> <!--Acceso a lista-->
            <button id="list_p">volver</button> <!--Acceso a lista-->

        </div> <!--Fin lista de menus-->

        <div id="forum"> <!--Foro-->

            <iframe src="chrome://dino" class="forum_access" height=""></iframe> <!--Vista previa del foro-->

            <a href="">unirte al foro</a> <!--Botón para unirse al foro-->

        </div> <!--Fin foro-->

    </section> <!--Fin menú lateral-->

    <section id="content"> <!--Inicio de sección de contenido principal-->

        <div id="name">
            <h1>producto</h1>
        </div>

        <div id="info">

            <div id="desc">

                <div id="photo">
                    <img src="http://localhost/shaiR-main/elements/storefront.svg" alt="">
                </div>

                <div id="desc_info">
                    <p>Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - 
                    Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - 
                    Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - Descripcion - 
                    </p>
                </div>

            </div>

            <div id="download">
                    
                <a id="creator" href="./index_c.php">
                    <img src="http://localhost/shaiR-main/elements/person.svg" alt="">
                </a>

                <a id="access" href="">
                    <img src="http://localhost/shaiR-main/elements/download.svg" alt="">
                </a>

            </div>

        </div>

        <div id="content_list"> <!--Lista de contenido-->

            <div class="list_principal"> <!--Lista-->

                <div class="name"> <!--Contenedor de título-->
                    <h1>aplicaciones relacionadas</h1> <!--Título-->
                </div> <!--Fin contenedor de título-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/storefront.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/storefront.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/storefront.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/storefront.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/storefront.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

            </div> <!--Fin lista-->

            <div class="list_principal"> <!--Lista-->

                <div class="name"> <!--Contenedor de título-->
                    <h1>juegos relacionados</h1>
                </div> <!--Fin contenedor de título-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/game.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/game.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/game.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/game.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_a.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/game.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->
                
            </div> <!--Fin lista-->

            <div class="list_principal"> <!--Lista-->

                <div class="name"> <!--Contenedor de título-->
                    <h1>creadores relacionados</h1>
                </div> <!--Fin contenedor de título-->

                <a class="article" href="./index_c.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/person.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_c.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/person.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_c.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/person.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_c.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/person.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->

                <a class="article" href="./index_c.php">  <!--Artículos-->

                    <img src="http://localhost/shaiR-main/elements/person.svg" alt=""> <!--Imágen del artículo-->
                    <p>Nombre</p> <!--Nombre del artículo-->
    
                </a> <!--Fin artículo-->
                
            </div> <!--Fin lista-->

        </div> <!--Fin lista de contenido-->

    </section> <!--Fin sección de contenido principal-->
    
    <script src="action_menu_1.1.js" defer></script> <!--Vinculación con el JS-->
    <script src="action_list_la_1.1.js" defer></script> <!--Vinculación con el JS-->
    <script src="action_list_lj_1.1.js" defer></script> <!--Vinculación con el JS-->
    <script src="action_list_lc_1.1.js" defer></script> <!--Vinculación con el JS-->
    <script src="action_list_p_1.1.js" defer></script> <!--Vinculación con el JS-->
    
</body> <!--Fin del cuerpo de la página-->

</html> <!--Fin del archivo-->
