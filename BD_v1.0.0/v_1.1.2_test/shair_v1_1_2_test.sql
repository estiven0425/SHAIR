-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 17-09-2023 a las 23:58:41
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
-- Base de datos: `shair_v1.1.2_test`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `archivo`
--

CREATE TABLE `archivo` (
  `id_archivo` int(11) NOT NULL,
  `nombre` varchar(25) NOT NULL,
  `archivo_producto` longblob NOT NULL,
  `id_producto` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creador`
--

CREATE TABLE `creador` (
  `id_creador` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `perfil_imagen` varchar(500) DEFAULT NULL,
  `contraseña` varchar(50) DEFAULT NULL,
  `descripcion` varchar(500) DEFAULT NULL,
  `correo` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `creador`
--

INSERT INTO `creador` (`id_creador`, `nombre`, `perfil_imagen`, `contraseña`, `descripcion`, `correo`, `fecha_modificacion`) VALUES
(3, 'Estiven', 'Yo.jpg', 'estivenMOTO--', 'Estiven es el dueño y cofundador de SHAIR, una plataforma que brinda un lugar en el cual empresas pequeñas puedan dar a conocer sus trabajos en el mundo de la teccnología.', 'estivenmoto6@gmail.com', '2023-09-16 21:15:32'),
(4, 'Marcela', NULL, 'marcelaMIAU--', 'Soy la gata del dueño juajuajua', 'marcelamiau@gmail.com', '2023-09-17 20:41:50');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `id_producto` int(11) NOT NULL,
  `id_creador` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `categoria` enum('videojuego','web','aplicación') NOT NULL,
  `plataforma` enum('Windows','Android','MacOs','Linux') NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `archivo`
--
ALTER TABLE `archivo`
  ADD PRIMARY KEY (`id_archivo`),
  ADD KEY `fk_archivo_producto` (`id_producto`);

--
-- Indices de la tabla `creador`
--
ALTER TABLE `creador`
  ADD PRIMARY KEY (`id_creador`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`id_producto`),
  ADD KEY `fk_creador_producto` (`id_creador`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `archivo`
--
ALTER TABLE `archivo`
  MODIFY `id_archivo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `creador`
--
ALTER TABLE `creador`
  MODIFY `id_creador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `archivo`
--
ALTER TABLE `archivo`
  ADD CONSTRAINT `fk_archivo_producto` FOREIGN KEY (`id_producto`) REFERENCES `producto` (`id_producto`);

--
-- Filtros para la tabla `producto`
--
ALTER TABLE `producto`
  ADD CONSTRAINT `fk_creador_producto` FOREIGN KEY (`id_creador`) REFERENCES `creador` (`id_creador`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
