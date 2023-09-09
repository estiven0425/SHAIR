-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 05-09-2023 a las 06:03:48
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
  `id_producto` int(11) NOT NULL,
  `archivo_producto` longblob NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `creador`
--

CREATE TABLE `creador` (
  `id_creador` int(11) NOT NULL,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `codigo` int(11) NOT NULL,
  `correo` varchar(100) NOT NULL,
  `apoyo` varchar(100) NOT NULL,
  `fecha_modificacion` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `creador`
--

INSERT INTO `creador` (`id_creador`, `nombre`, `descripcion`, `codigo`, `correo`, `apoyo`, `fecha_modificacion`) VALUES
(1, 'Elon Musk', 'Elon Musk, el dueño de Twitter, Tesla y SpaceX se une a SHAIR', 55467, 'emx@spacex.com', 'emx@spacex.com', '2023-09-05 02:45:37'),
(2, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:06:23'),
(8, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:07:00'),
(9, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:07:01'),
(10, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:09:29'),
(11, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:09:42'),
(12, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:10:45'),
(13, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:11:01'),
(14, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:12:36'),
(15, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:12:37'),
(16, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:12:43'),
(17, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:12:44'),
(18, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:13:15'),
(19, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:13:38'),
(20, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:14:42'),
(21, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:14:53'),
(22, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:14:58'),
(23, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:15:11'),
(24, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:15:21'),
(25, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:15:32'),
(26, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:15:43'),
(27, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:16:27'),
(28, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:16:49'),
(29, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:16:54'),
(30, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:17:00'),
(31, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:18:34'),
(32, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:18:42'),
(33, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:18:57'),
(34, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:19:06'),
(35, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:19:44'),
(36, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:19:50'),
(37, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:20:02'),
(38, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:20:17'),
(39, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:20:23'),
(40, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:20:27'),
(41, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:20:33'),
(42, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:20:50'),
(43, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:21:03'),
(44, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:21:31'),
(45, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:22:27'),
(46, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:22:33'),
(47, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:22:47'),
(48, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:22:54'),
(49, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:23:02'),
(50, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:23:09'),
(51, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:23:13'),
(52, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:23:21'),
(53, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:23:35'),
(54, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:23:59'),
(55, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:24:22'),
(56, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:24:33'),
(57, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:24:49'),
(58, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:29:13'),
(59, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:29:59'),
(60, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:30:15'),
(61, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:30:26'),
(62, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:30:34'),
(63, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:30:38'),
(64, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:30:42'),
(65, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:31:20'),
(66, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:31:26'),
(67, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:31:42'),
(68, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:32:00'),
(69, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:32:42'),
(70, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:32:49'),
(71, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:32:55'),
(72, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:33:02'),
(73, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:33:06'),
(74, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:33:29'),
(75, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:33:34'),
(76, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:33:49'),
(77, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:33:53'),
(78, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:34:37'),
(79, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:34:56'),
(80, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:35:33'),
(81, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:35:40'),
(82, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:35:42'),
(83, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:35:58'),
(84, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:36:11'),
(85, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:36:25'),
(86, 'Marcela', 'Soy la gata del dueño', 1155798, 'marcela2023@shair.co', 'Dame whiskas', '2023-09-05 03:36:40');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `foro`
--

CREATE TABLE `foro` (
  `id_usuario` int(11) NOT NULL,
  `mensaje` varchar(500) NOT NULL,
  `nombre` varchar(50) NOT NULL
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
  `id_creador` int(11) NOT NULL,
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
-- AUTO_INCREMENT de la tabla `creador`
--
ALTER TABLE `creador`
  MODIFY `id_creador` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=87;

--
-- AUTO_INCREMENT de la tabla `foro`
--
ALTER TABLE `foro`
  MODIFY `id_usuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `id_producto` int(11) NOT NULL AUTO_INCREMENT;

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
