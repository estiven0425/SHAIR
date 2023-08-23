-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 18-08-2023 a las 05:58:38
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `shair`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivo`
--

CREATE TABLE `archivo` (
  `id_producto` int(11) NOT NULL,
  `archivo_producto` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Disparadores `archivo`
--
DELIMITER $$
CREATE TRIGGER `ausencia_pro` AFTER DELETE ON `archivo` FOR EACH ROW BEGIN
  DELETE FROM producto WHERE id_producto = OLD.id_producto;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creador`
--

CREATE TABLE `creador` (
  `id_creador` varchar(100) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `categoria` enum('videojuego','web') NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `codigo` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `apoyo` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Disparadores `creador`
--
DELIMITER $$
CREATE TRIGGER `ausencia_cre` AFTER DELETE ON `creador` FOR EACH ROW BEGIN
  DECLARE producto_id INT;
  DECLARE done INT DEFAULT 0; -- Variable para controlar el bucle
  
  -- Cursor para obtener los id_producto de los productos asociados al creador eliminado
  DECLARE productos_cursor CURSOR FOR
    SELECT id_producto FROM producto WHERE id_creador = OLD.id_creador;
    
  -- Manejo de NOT FOUND para evitar errores
  DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = 1;
  
  -- Abrir el cursor
  OPEN productos_cursor;
  
  -- Recorrer y eliminar los archivos asociados a cada producto
  productos_loop: LOOP
    FETCH productos_cursor INTO producto_id;
    IF done = 1 THEN
      LEAVE productos_loop;
    END IF;
    
    DELETE FROM archivo WHERE id_producto = producto_id;
  END LOOP;
  
  -- Cerrar el cursor
  CLOSE productos_cursor;
  
  -- Eliminar los productos asociados al creador eliminado
  DELETE FROM producto WHERE id_creador = OLD.id_creador;
END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro`
--

CREATE TABLE `foro` (
  `id_usuario` int(11) NOT NULL,
  `mensaje` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `categoria` enum('videojuego','web') NOT NULL,
  `plataforma` varchar(100) NOT NULL,
  `id_creador` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `shair`
--

CREATE TABLE `shair` (
  `correo` varchar(100) NOT NULL,
  `apoyo` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `top`
--

CREATE TABLE `top` (
  `posicion` int(2) NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivo`
--
ALTER TABLE `archivo`
  ADD KEY `id_producto` (`id_producto`);

--
-- Indices de la tabla `creador`
--
ALTER TABLE `creador`
  ADD PRIMARY KEY (`id_creador`);

--
-- Indices de la tabla `foro`
--
ALTER TABLE `foro`
  ADD PRIMARY KEY (`id_usuario`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `id_creador` (`id_creador`);

--
-- Indices de la tabla `top`
--
ALTER TABLE `top`
  ADD PRIMARY KEY (`posicion`),
  ADD KEY `id_producto` (`id_producto`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `top`
--
ALTER TABLE `top`
  MODIFY `posicion` int(2) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `archivo`
--
ALTER TABLE `archivo`
  ADD CONSTRAINT `archivo_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `producto_ibfk_1` FOREIGN KEY (`id_creador`) REFERENCES `creador` (`id_creador`);

--
-- Filtros para la tabla `top`
--
ALTER TABLE `top`
  ADD CONSTRAINT `top_ibfk_1` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
