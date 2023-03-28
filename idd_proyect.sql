-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 28-03-2023 a las 01:45:13
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `idd_proyect`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `asociasiones`
--

CREATE TABLE `asociasiones` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `asociasion` varchar(191) NOT NULL,
  `correo` varchar(191) NOT NULL,
  `Descripcion` varchar(191) NOT NULL,
  `Direccion` varchar(191) NOT NULL,
  `telefono` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `asociasiones`
--

INSERT INTO `asociasiones` (`id`, `asociasion`, `correo`, `Descripcion`, `Direccion`, `telefono`, `created_at`, `updated_at`) VALUES
(1, 'Cam Huejutla', '', 'La escuela Centro De Atencion Multiple Num 8 es una escuela del sector público, de nivel educativo Cam y de turno matutino.', 'CALLE CARRETERA FEDERAL 105 MEXICO-TAMPICO KILOMETRO 214 , COL. EL MIRADOR', '772545624', '2023-03-26 13:01:47', '2023-03-26 13:01:48');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `backups_b_d_s`
--

CREATE TABLE `backups_b_d_s` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `backups_b_d_s`
--

INSERT INTO `backups_b_d_s` (`id`, `name`, `url`, `created_at`, `updated_at`) VALUES
(10, 'backup_1679958255.sql', 'http://127.0.0.1:8000/backup/backup_1679958255.sql', NULL, NULL),
(11, 'backup_1679959252.sql', 'http://127.0.0.1:8000/backup/backup_1679959252.sql', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `Descripcion` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `Descripcion`, `created_at`, `updated_at`) VALUES
(1, 'En proceso', '2023-03-26 12:56:04', '2023-03-26 12:56:04'),
(2, 'En revision', '2023-03-26 12:56:04', '2023-03-26 12:56:04'),
(3, 'Publicado', '2023-03-26 12:56:53', '2023-03-26 12:56:53');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `failed_jobs`
--

CREATE TABLE `failed_jobs` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `migrations`
--

CREATE TABLE `migrations` (
  `id` int(10) UNSIGNED NOT NULL,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_02_12_062917_create_rols_table', 1),
(2, '2014_10_12_000000_create_users_table', 1),
(3, '2014_10_12_100000_create_password_resets_table', 1),
(4, '2016_06_01_000001_create_oauth_auth_codes_table', 1),
(5, '2016_06_01_000002_create_oauth_access_tokens_table', 1),
(6, '2016_06_01_000003_create_oauth_refresh_tokens_table', 1),
(7, '2016_06_01_000004_create_oauth_clients_table', 1),
(8, '2016_06_01_000005_create_oauth_personal_access_clients_table', 1),
(9, '2019_08_19_000000_create_failed_jobs_table', 1),
(10, '2019_12_14_000001_create_personal_access_tokens_table', 1),
(11, '2023_01_12_055154_create_asociasiones_table', 1),
(12, '2023_01_26_000050_create_estados_table', 1),
(13, '2023_01_27_075213_create_tiporecursos_table', 1),
(14, '2023_01_27_075652_create_recursos_table', 1),
(15, '2023_02_22_135001_create_privilegios_table', 1),
(16, '2023_02_22_135023_create_rol__privilegios_table', 1),
(17, '2023_03_23_024729_create_queston_secrets_table', 1),
(18, '2023_03_23_024750_create_question_secret_users_table', 1),
(19, '2023_03_27_025135_create_seccions_table', 1),
(20, '2023_03_27_025153_create_objectivos_cursos_table', 1),
(21, '2023_03_27_220116_create_backups_b_d_s_table', 2);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_access_tokens`
--

CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_access_tokens`
--

INSERT INTO `oauth_access_tokens` (`id`, `user_id`, `client_id`, `name`, `scopes`, `revoked`, `created_at`, `updated_at`, `expires_at`) VALUES
('06e22b3f8aca992c57ef73eee773d6f8014304bb4b6658bacd760fbdf97efcc19bd63b3cfeb18c1e', 8, 1, 'Brayan Andrade Hernandez', '[]', 0, '2023-03-28 03:16:00', '2023-03-28 03:16:00', '2023-04-03 21:16:00'),
('3cb12885f02a1a0f36f686d97a55b9dbb9a00dbb0ca7cc7f2b2eb86c48b21f69ec9828ea80a30621', 8, 1, 'Brayan Andrade Hernandez', '[]', 0, '2023-03-27 12:30:40', '2023-03-27 12:30:40', '2023-04-03 06:30:40'),
('455b3ee894f489bf623860f047548da0cdd9fc04ff562ca369b2987dca1fe1498aa95cc421bb6c84', 9, 1, 'Brayan Andrade Hernadez', '[]', 0, '2023-03-24 05:10:07', '2023-03-24 05:10:07', '2023-03-29 23:10:07'),
('ce6cf0feced586d7aa77364875431b88e18626b08e19d4a0923dda0f75daa3a6d9e3fa23c17da605', 13, 1, 'Hernadez Hernandez Martinez Manuel', '[]', 0, '2023-03-28 05:06:58', '2023-03-28 05:06:58', '2023-04-03 23:06:58'),
('dbe7b21a6ea9696263383e3394ede6b1b4bd6c1936f413f2239539aca066438953f36c0cbdb5a18b', 11, 1, 'Viviana Jose Manel', '[]', 0, '2023-03-24 05:58:19', '2023-03-24 05:58:19', '2023-03-29 23:58:19');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_auth_codes`
--

CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_clients`
--

CREATE TABLE `oauth_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(191) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_clients`
--

INSERT INTO `oauth_clients` (`id`, `user_id`, `name`, `secret`, `provider`, `redirect`, `personal_access_client`, `password_client`, `revoked`, `created_at`, `updated_at`) VALUES
(1, NULL, 'Laravel Personal Access Client', 'npPUUYNEsYSwJ8gCtEOJq8og2xNChCTl1NplEmgn', NULL, 'http://localhost', 1, 0, 0, '2023-02-13 16:50:20', '2023-02-13 16:50:20'),
(2, NULL, 'Laravel Password Grant Client', 'CKnGN5kTog2deEp3ifO9CT6G0kM2YL90ODNibjHZ', 'users', 'http://localhost', 0, 1, 0, '2023-02-13 16:50:20', '2023-02-13 16:50:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_personal_access_clients`
--

CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `client_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `oauth_personal_access_clients`
--

INSERT INTO `oauth_personal_access_clients` (`id`, `client_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2023-02-13 16:50:20', '2023-02-13 16:50:20');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `oauth_refresh_tokens`
--

CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `objectivos_cursos`
--

CREATE TABLE `objectivos_cursos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `objetivo` varchar(191) NOT NULL,
  `id_curso` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `objectivos_cursos`
--

INSERT INTO `objectivos_cursos` (`id`, `objetivo`, `id_curso`, `created_at`, `updated_at`) VALUES
(1, 'Realizar rompecabezas de complejidad creciente', 1, '2023-03-28 13:45:50', '2023-03-27 13:45:50'),
(2, 'Percibir, identificar e interiorizar a través de la visión ampliando el campo perceptivo visual.', 1, '2023-03-27 13:45:50', '2023-03-27 13:45:50'),
(3, 'Encontrar relaciones de igualdad entre dos o más objetos o figuras.', 1, '2023-03-27 13:48:55', '2023-03-27 13:48:55'),
(4, 'Encontrar relaciones de semejanza entre dos o más objetos o figuras', 1, '2023-03-27 13:49:10', '2023-03-27 13:49:10'),
(5, 'Encontrar relaciones de semejanza entre dos o más objetos o figuras', 1, '2023-03-27 13:49:34', '2023-03-27 13:49:34');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `password_resets`
--

CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `personal_access_tokens`
--

CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `privilegios`
--

CREATE TABLE `privilegios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `description` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `privilegios`
--

INSERT INTO `privilegios` (`id`, `description`, `created_at`, `updated_at`) VALUES
(3, 'Registro de usuarios administradores', NULL, NULL),
(4, 'Modificar Datos de usuarios', NULL, NULL),
(5, 'Registrar Roles', NULL, NULL),
(6, 'Modificar a a usuario inactivo', NULL, NULL),
(7, 'Modificar Roles', NULL, NULL),
(8, 'Asignar roles a permisos', NULL, NULL),
(9, 'registrar permisos', NULL, NULL),
(11, 'modificar permisos', NULL, NULL),
(12, 'ver usuarios', NULL, NULL),
(13, 'ver roles', NULL, NULL),
(14, 'ver permisos', NULL, NULL),
(15, 'ver asociaciones', NULL, NULL),
(16, 'ver cursos', NULL, NULL),
(17, 'ver productos', NULL, NULL),
(18, 'Respalo base de datos', NULL, NULL),
(19, 'revision de curso', NULL, NULL),
(20, 'aceptar  para publicar curso', NULL, NULL),
(21, 'agregar tipo de recurso', NULL, NULL),
(22, 'editar tipo de recursos', NULL, NULL),
(23, 'Agregar curso', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `question_secret_users`
--

CREATE TABLE `question_secret_users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_user` bigint(20) UNSIGNED DEFAULT NULL,
  `id_questionSecret` bigint(20) UNSIGNED DEFAULT NULL,
  `answer` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `question_secret_users`
--

INSERT INTO `question_secret_users` (`id`, `id_user`, `id_questionSecret`, `answer`, `created_at`, `updated_at`) VALUES
(1, 9, 6, 'Ozzy Osbourne', '2023-03-24 03:27:15', '2023-03-24 03:27:15'),
(2, 13, 1, 'nose', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `queston_secrets`
--

CREATE TABLE `queston_secrets` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `questionsSecret` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `queston_secrets`
--

INSERT INTO `queston_secrets` (`id`, `questionsSecret`, `created_at`, `updated_at`) VALUES
(1, '¿Cual fue el nombre de tu primer mascota?', '2023-03-24 09:16:18', '2023-03-24 09:16:18'),
(2, '¿Cual es el nombre de tu primer pareja?', '2023-03-24 09:16:18', '2023-03-24 09:16:18'),
(3, '¿Nombre de la calle donde cresiste?', '2023-03-24 09:17:19', '2023-03-24 09:17:19'),
(4, '¿Que es la cosa que menos te gusta de ti?', '2023-03-24 09:18:27', '2023-03-24 09:18:27'),
(5, '¿Cual es el nombre de tu profesor favorito?', '2023-03-24 09:19:20', '2023-03-24 09:19:20'),
(6, '¿Cual es el nombre de tu artista favorito?', '2023-03-24 09:20:21', '2023-03-24 09:20:21');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `recursos`
--

CREATE TABLE `recursos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `Descripcion` varchar(191) NOT NULL,
  `tipo` varchar(191) NOT NULL,
  `precio` varchar(191) NOT NULL,
  `id_Usuario` bigint(20) UNSIGNED DEFAULT NULL,
  `id_asociasion` bigint(20) UNSIGNED DEFAULT NULL,
  `id_Estado` bigint(20) UNSIGNED DEFAULT NULL,
  `tipyRec` bigint(20) UNSIGNED DEFAULT NULL,
  `vistaprevia` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `recursos`
--

INSERT INTO `recursos` (`id`, `name`, `Descripcion`, `tipo`, `precio`, `id_Usuario`, `id_asociasion`, `id_Estado`, `tipyRec`, `vistaprevia`, `created_at`, `updated_at`) VALUES
(1, 'Juego rompecabezas', 'juego de mesa cuyo objetivo es formar una figura combinando correctamente las partes de esta', 'gratis', '0', 13, 1, 3, 1, 'ewfasfsadfasd.jpg', NULL, NULL),
(2, 'Hundir la Flota', 'Este es un juego matemático clásico y muy fácil de llevar al aula en formato papel. Introducir este tipo de juegos en el aula favorece muchos aprendizajes', 'gratis', '0', 13, 1, 3, 1, 'hundir la flota casero_01.jpg', NULL, NULL),
(3, 'Morfologico', 'Es un sistema novedoso que, a través de diferentes retos, consigue que los alumnos se sientan atraídos por el aprendizaje y análisis de las categorías gramaticales de palabras', 'gratis', '0', 13, 1, 3, 1, '1842a04e4467ac3ba59e403ba0a2e302.jpg', NULL, NULL),
(4, 'Enseñar a leer', 'Aprende a como controlar mejor los aspectos de lectura de tu hijo', 'gratis', '0', 13, 1, 3, 2, 'reading-to-son-1429252-1280x960-3828376458.png', NULL, NULL),
(5, 'Competencia de memoria', 'Aprende a como controlar mejor los aspectos de fortalecimiento de memoria de tu hijo', 'gratis', '0', 13, 1, 3, 2, 'Actividades-para-niños-con-discapacidad-intelectual.webp', NULL, NULL),
(6, '13efad', '3asdfae', 'feafewf', '0', 13, 1, 1, 3, '', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rols`
--

CREATE TABLE `rols` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `rol` varchar(191) NOT NULL,
  `Description` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `rols`
--

INSERT INTO `rols` (`id`, `rol`, `Description`, `created_at`, `updated_at`) VALUES
(1, 'usuario cliente', 'Usuario de registro de pagina web', '2023-02-23 14:05:14', '2023-02-23 14:05:14'),
(2, 'usuario inactivo', 'El usuario usara esta cuenta al cambiar a su estado inactivo', '2023-02-23 22:36:07', '2023-02-23 22:36:07'),
(3, 'Super adminstrador', 'Acceso al panel de administración del sitio web:', '2023-03-20 04:59:22', '2023-03-20 04:59:22'),
(10, 'Administrador', 'Administrador secundario', NULL, NULL),
(11, 'Creador de cursos', 'Creador de cursos para sitio web', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol__privilegios`
--

CREATE TABLE `rol__privilegios` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `id_rol` bigint(20) UNSIGNED DEFAULT NULL,
  `id_privilegio` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `rol__privilegios`
--

INSERT INTO `rol__privilegios` (`id`, `id_rol`, `id_privilegio`, `created_at`, `updated_at`) VALUES
(1, 3, 3, '2023-03-26 12:50:04', '2023-03-26 12:50:04'),
(2, 3, 4, '2023-03-26 12:50:04', '2023-03-26 12:50:04'),
(3, 3, 5, '2023-03-26 12:50:40', '2023-03-26 12:50:40'),
(4, 2, 6, '2023-03-26 12:50:57', '2023-03-26 12:50:57'),
(5, 3, 7, '2023-03-26 12:51:27', '2023-03-26 12:51:27'),
(6, 3, 8, '2023-03-26 12:51:27', '2023-03-26 12:51:27'),
(7, 3, 9, '2023-03-26 12:52:46', '2023-03-26 12:52:46'),
(8, 3, 11, '2023-03-26 12:52:46', '2023-03-26 12:52:46'),
(9, 3, 12, '2023-03-26 12:53:32', '2023-03-26 12:53:32'),
(10, 3, 13, '2023-03-26 12:53:50', '2023-03-26 12:53:50'),
(11, 3, 14, '2023-03-26 12:54:10', '2023-03-26 12:54:10'),
(12, 3, 15, NULL, NULL),
(13, 3, 16, NULL, NULL),
(14, 3, 17, NULL, NULL),
(15, 3, 18, NULL, NULL),
(16, 11, 23, NULL, NULL),
(17, 11, 22, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `seccions`
--

CREATE TABLE `seccions` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `nombre` varchar(191) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `plataforma` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL,
  `id_curso` bigint(20) UNSIGNED DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `seccions`
--

INSERT INTO `seccions` (`id`, `nombre`, `descripcion`, `plataforma`, `url`, `id_curso`, `created_at`, `updated_at`) VALUES
(1, 'Sección 1', '¿Que aprenderás en este curso?', 'Youtube', 'https://www.youtube.com/watch?v=s6-BNGlLOMA', 1, NULL, NULL),
(2, 'Sección 2', 'Rompecabezas sencillo', 'Youtube', 'https://www.youtube.com/watch?v=_s7LWldfXaw&list=PLGCqUQzNP3EsVxrQkxo9H1Yv-ki9Vzn0Z', 1, NULL, NULL),
(3, 'Sección 3', 'Mejorando concentracion', 'Youtube', 'https://www.youtube.com/watch?v=Lf_fcdyHt-w&list=PLGCqUQzNP3EsVxrQkxo9H1Yv-ki9Vzn0Z&index=2', 1, NULL, NULL),
(4, 'Sección 4', 'Resultado finales', 'Youtube', 'https://www.youtube.com/watch?v=-QWpBHUGrLw&list=PLGCqUQzNP3EsVxrQkxo9H1Yv-ki9Vzn0Z&index=3', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `tiporecursos`
--

CREATE TABLE `tiporecursos` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `img` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `tiporecursos`
--

INSERT INTO `tiporecursos` (`id`, `name`, `description`, `img`, `created_at`, `updated_at`) VALUES
(1, 'Gamificación educativa', 'Aquí encontrarás todo respecto a gamificación educativa, desde información hasta ejercicios para implementarlo detro del aula.', 'gamificacion.jpg', NULL, NULL),
(2, 'Videos educativos', 'En este apartado encontrarás una colección de videos educativos para un mejor desempeño en el aula y en la vida cotidiana.\r\n\r\n', 'videos_edu.jpg', NULL, NULL),
(3, 'Comunidades de aprendizaje', 'En este apartado del sitio encontrarás cominidades de aprendizaje', 'comunidad_aprend.jpg', NULL, NULL),
(4, 'Plataformas educativas', 'Aquí encontrarás una colección de plataformas educativas enfocadas a la educación especial.', 'plataformas_edu.jpg', NULL, NULL),
(5, 'Información', 'En este apartado encontrarás toda la información referente a la discapacidad intelectual', 'informacion.png', NULL, NULL),
(6, 'Juegos didácticos', 'Juegos interactivos que pueden poner en práctica dentro del aula o en casa.', 'juegos_didac.jpg', NULL, NULL),
(7, 'Consejos', 'Consejos de especialistas en el tema', 'consejos.png', NULL, NULL),
(8, 'Consejos', 'Acerca de como mejorar aspectos de la vida cotidiana desde casa o en el aula.', 'tips.jpg', NULL, NULL),
(10, 'prueba', 'prueba', '1679862245280092539_524583199373354_5368939730743918794_n.jpg', NULL, NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(191) NOT NULL,
  `nameUser` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `typeUser` bigint(20) UNSIGNED DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Volcado de datos para la tabla `users`
--

INSERT INTO `users` (`id`, `name`, `nameUser`, `phone`, `email`, `email_verified_at`, `password`, `typeUser`, `remember_token`, `created_at`, `updated_at`) VALUES
(8, 'Brayan Andrade Hernandez', '20200697BAH', '7713526698', '20200697@uthh.edu.mx', NULL, '$2y$10$OUaWeOzYaflH9630kBKiGeeRRS6CZooWtzWaeAwAPNeN0SWn7sgZq', 3, NULL, NULL, NULL),
(9, 'Brayan Andrade Hernadez', 'andrade15', '77812731', 'andradehernadez5@gmail.com', NULL, '$2y$10$ojlNLTq9Wh3pc5wsi0fNE.0gYua4oby7rmvrFEQcSNWrQluRZHB/6', 1, NULL, NULL, NULL),
(11, 'Viviana Jose Manel', '20200965VJS', '772317293', '20200965@uthh.edu.mx', NULL, '$2y$10$8h/bAwg729aP7hY/K0765.reo1iUTR011DpABSxtQ1c7KKjmrbD7.', 10, NULL, NULL, NULL),
(13, 'Hernadez Hernandez Martinez Manuel', 'camHuejutla2023', '773918231', 'camHuejutla2023@gmail.com', NULL, '$2y$10$HuYbnkLXM3f1RDG8CvBO1ejJEqsSrHl1lrObtvRdF7fO7WwzUTph6', 11, NULL, NULL, NULL);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `asociasiones`
--
ALTER TABLE `asociasiones`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `backups_b_d_s`
--
ALTER TABLE `backups_b_d_s`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`);

--
-- Indices de la tabla `migrations`
--
ALTER TABLE `migrations`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_access_tokens`
--
ALTER TABLE `oauth_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_access_tokens_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_auth_codes`
--
ALTER TABLE `oauth_auth_codes`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_auth_codes_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_clients_user_id_index` (`user_id`);

--
-- Indices de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `oauth_refresh_tokens`
--
ALTER TABLE `oauth_refresh_tokens`
  ADD PRIMARY KEY (`id`),
  ADD KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`);

--
-- Indices de la tabla `objectivos_cursos`
--
ALTER TABLE `objectivos_cursos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `objectivos_cursos_id_curso_foreign` (`id_curso`);

--
-- Indices de la tabla `password_resets`
--
ALTER TABLE `password_resets`
  ADD KEY `password_resets_email_index` (`email`);

--
-- Indices de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  ADD KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`);

--
-- Indices de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `question_secret_users`
--
ALTER TABLE `question_secret_users`
  ADD PRIMARY KEY (`id`),
  ADD KEY `question_secret_users_id_user_foreign` (`id_user`),
  ADD KEY `question_secret_users_id_questionsecret_foreign` (`id_questionSecret`);

--
-- Indices de la tabla `queston_secrets`
--
ALTER TABLE `queston_secrets`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `recursos_id_usuario_foreign` (`id_Usuario`),
  ADD KEY `recursos_id_asociasion_foreign` (`id_asociasion`),
  ADD KEY `recursos_id_estado_foreign` (`id_Estado`),
  ADD KEY `recursos_tipyrec_foreign` (`tipyRec`);

--
-- Indices de la tabla `rols`
--
ALTER TABLE `rols`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol__privilegios`
--
ALTER TABLE `rol__privilegios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `rol__privilegios_id_rol_foreign` (`id_rol`),
  ADD KEY `rol__privilegios_id_privilegio_foreign` (`id_privilegio`);

--
-- Indices de la tabla `seccions`
--
ALTER TABLE `seccions`
  ADD PRIMARY KEY (`id`),
  ADD KEY `seccions_id_curso_foreign` (`id_curso`);

--
-- Indices de la tabla `tiporecursos`
--
ALTER TABLE `tiporecursos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `users_email_unique` (`email`),
  ADD KEY `users_typeuser_foreign` (`typeUser`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `asociasiones`
--
ALTER TABLE `asociasiones`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `backups_b_d_s`
--
ALTER TABLE `backups_b_d_s`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `estados`
--
ALTER TABLE `estados`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `failed_jobs`
--
ALTER TABLE `failed_jobs`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `migrations`
--
ALTER TABLE `migrations`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT de la tabla `oauth_clients`
--
ALTER TABLE `oauth_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `oauth_personal_access_clients`
--
ALTER TABLE `oauth_personal_access_clients`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT de la tabla `objectivos_cursos`
--
ALTER TABLE `objectivos_cursos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT de la tabla `personal_access_tokens`
--
ALTER TABLE `personal_access_tokens`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `privilegios`
--
ALTER TABLE `privilegios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de la tabla `question_secret_users`
--
ALTER TABLE `question_secret_users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `queston_secrets`
--
ALTER TABLE `queston_secrets`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `recursos`
--
ALTER TABLE `recursos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `rols`
--
ALTER TABLE `rols`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `rol__privilegios`
--
ALTER TABLE `rol__privilegios`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `seccions`
--
ALTER TABLE `seccions`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `tiporecursos`
--
ALTER TABLE `tiporecursos`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `objectivos_cursos`
--
ALTER TABLE `objectivos_cursos`
  ADD CONSTRAINT `objectivos_cursos_id_curso_foreign` FOREIGN KEY (`id_curso`) REFERENCES `recursos` (`id`);

--
-- Filtros para la tabla `question_secret_users`
--
ALTER TABLE `question_secret_users`
  ADD CONSTRAINT `question_secret_users_id_questionsecret_foreign` FOREIGN KEY (`id_questionSecret`) REFERENCES `queston_secrets` (`id`),
  ADD CONSTRAINT `question_secret_users_id_user_foreign` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`);

--
-- Filtros para la tabla `recursos`
--
ALTER TABLE `recursos`
  ADD CONSTRAINT `recursos_id_asociasion_foreign` FOREIGN KEY (`id_asociasion`) REFERENCES `asociasiones` (`id`),
  ADD CONSTRAINT `recursos_id_estado_foreign` FOREIGN KEY (`id_Estado`) REFERENCES `estados` (`id`),
  ADD CONSTRAINT `recursos_id_usuario_foreign` FOREIGN KEY (`id_Usuario`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `recursos_tipyrec_foreign` FOREIGN KEY (`tipyRec`) REFERENCES `tiporecursos` (`id`);

--
-- Filtros para la tabla `rol__privilegios`
--
ALTER TABLE `rol__privilegios`
  ADD CONSTRAINT `rol__privilegios_id_privilegio_foreign` FOREIGN KEY (`id_privilegio`) REFERENCES `privilegios` (`id`),
  ADD CONSTRAINT `rol__privilegios_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `rols` (`id`) ON DELETE CASCADE;

--
-- Filtros para la tabla `seccions`
--
ALTER TABLE `seccions`
  ADD CONSTRAINT `seccions_id_curso_foreign` FOREIGN KEY (`id_curso`) REFERENCES `recursos` (`id`);

--
-- Filtros para la tabla `users`
--
ALTER TABLE `users`
  ADD CONSTRAINT `users_typeuser_foreign` FOREIGN KEY (`typeUser`) REFERENCES `rols` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
