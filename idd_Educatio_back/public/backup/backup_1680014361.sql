-- MariaDB dump 10.19  Distrib 10.4.27-MariaDB, for Linux (x86_64)
--
-- Host: 127.0.0.1    Database: idd_proyect
-- ------------------------------------------------------
-- Server version	10.4.27-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Current Database: `idd_proyect`
--

CREATE DATABASE /*!32312 IF NOT EXISTS*/ `idd_proyect` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

USE `idd_proyect`;

--
-- Table structure for table `asociasiones`
--

DROP TABLE IF EXISTS `asociasiones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `asociasiones` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `asociasion` varchar(191) NOT NULL,
  `correo` varchar(191) NOT NULL,
  `Descripcion` varchar(191) NOT NULL,
  `Direccion` varchar(191) NOT NULL,
  `telefono` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `asociasiones`
--

LOCK TABLES `asociasiones` WRITE;
/*!40000 ALTER TABLE `asociasiones` DISABLE KEYS */;
INSERT INTO `asociasiones` VALUES (1,'Cam Huejutla','','La escuela Centro De Atencion Multiple Num 8 es una escuela del sector público, de nivel educativo Cam y de turno matutino.','CALLE CARRETERA FEDERAL 105 MEXICO-TAMPICO KILOMETRO 214 , COL. EL MIRADOR','772545624','2023-03-26 13:01:47','2023-03-26 13:01:48');
/*!40000 ALTER TABLE `asociasiones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `backups_b_d_s`
--

DROP TABLE IF EXISTS `backups_b_d_s`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `backups_b_d_s` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `backups_b_d_s`
--

LOCK TABLES `backups_b_d_s` WRITE;
/*!40000 ALTER TABLE `backups_b_d_s` DISABLE KEYS */;
INSERT INTO `backups_b_d_s` VALUES (37,'backup_1679985807.sql','http://127.0.0.1:8000/backup/backup_1679985807.sql',NULL,NULL),(38,'backup_1679985853.sql','http://127.0.0.1:8000/backup/backup_1679985853.sql',NULL,NULL),(39,'backup_1680014250.sql','http://127.0.0.1:8000/backup/backup_1680014250.sql',NULL,NULL);
/*!40000 ALTER TABLE `backups_b_d_s` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `estados`
--

DROP TABLE IF EXISTS `estados`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `estados` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `Descripcion` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `estados`
--

LOCK TABLES `estados` WRITE;
/*!40000 ALTER TABLE `estados` DISABLE KEYS */;
INSERT INTO `estados` VALUES (1,'En proceso','2023-03-26 12:56:04','2023-03-26 12:56:04'),(2,'En revision','2023-03-26 12:56:04','2023-03-26 12:56:04'),(3,'Publicado','2023-03-26 12:56:53','2023-03-26 12:56:53');
/*!40000 ALTER TABLE `estados` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `failed_jobs`
--

DROP TABLE IF EXISTS `failed_jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `failed_jobs` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `uuid` varchar(191) NOT NULL,
  `connection` text NOT NULL,
  `queue` text NOT NULL,
  `payload` longtext NOT NULL,
  `exception` longtext NOT NULL,
  `failed_at` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `failed_jobs_uuid_unique` (`uuid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `failed_jobs`
--

LOCK TABLES `failed_jobs` WRITE;
/*!40000 ALTER TABLE `failed_jobs` DISABLE KEYS */;
/*!40000 ALTER TABLE `failed_jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `migrations`
--

DROP TABLE IF EXISTS `migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `migrations`
--

LOCK TABLES `migrations` WRITE;
/*!40000 ALTER TABLE `migrations` DISABLE KEYS */;
INSERT INTO `migrations` VALUES (1,'2014_02_12_062917_create_rols_table',1),(2,'2014_10_12_000000_create_users_table',1),(3,'2014_10_12_100000_create_password_resets_table',1),(4,'2016_06_01_000001_create_oauth_auth_codes_table',1),(5,'2016_06_01_000002_create_oauth_access_tokens_table',1),(6,'2016_06_01_000003_create_oauth_refresh_tokens_table',1),(7,'2016_06_01_000004_create_oauth_clients_table',1),(8,'2016_06_01_000005_create_oauth_personal_access_clients_table',1),(9,'2019_08_19_000000_create_failed_jobs_table',1),(10,'2019_12_14_000001_create_personal_access_tokens_table',1),(11,'2023_01_12_055154_create_asociasiones_table',1),(12,'2023_01_26_000050_create_estados_table',1),(13,'2023_01_27_075213_create_tiporecursos_table',1),(14,'2023_01_27_075652_create_recursos_table',1),(15,'2023_02_22_135001_create_privilegios_table',1),(16,'2023_02_22_135023_create_rol__privilegios_table',1),(17,'2023_03_23_024729_create_queston_secrets_table',1),(18,'2023_03_23_024750_create_question_secret_users_table',1),(19,'2023_03_27_025135_create_seccions_table',1),(20,'2023_03_27_025153_create_objectivos_cursos_table',1),(21,'2023_03_27_220116_create_backups_b_d_s_table',2);
/*!40000 ALTER TABLE `migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_access_tokens`
--

DROP TABLE IF EXISTS `oauth_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_access_tokens` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `name` varchar(191) DEFAULT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_access_tokens_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_access_tokens`
--

LOCK TABLES `oauth_access_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_access_tokens` DISABLE KEYS */;
INSERT INTO `oauth_access_tokens` VALUES ('06e22b3f8aca992c57ef73eee773d6f8014304bb4b6658bacd760fbdf97efcc19bd63b3cfeb18c1e',8,1,'Brayan Andrade Hernandez','[]',0,'2023-03-28 03:16:00','2023-03-28 03:16:00','2023-04-03 21:16:00'),('3cb12885f02a1a0f36f686d97a55b9dbb9a00dbb0ca7cc7f2b2eb86c48b21f69ec9828ea80a30621',8,1,'Brayan Andrade Hernandez','[]',0,'2023-03-27 12:30:40','2023-03-27 12:30:40','2023-04-03 06:30:40'),('455b3ee894f489bf623860f047548da0cdd9fc04ff562ca369b2987dca1fe1498aa95cc421bb6c84',9,1,'Brayan Andrade Hernadez','[]',0,'2023-03-24 05:10:07','2023-03-24 05:10:07','2023-03-29 23:10:07'),('ce6cf0feced586d7aa77364875431b88e18626b08e19d4a0923dda0f75daa3a6d9e3fa23c17da605',13,1,'Hernadez Hernandez Martinez Manuel','[]',0,'2023-03-28 05:06:58','2023-03-28 05:06:58','2023-04-03 23:06:58'),('dbe7b21a6ea9696263383e3394ede6b1b4bd6c1936f413f2239539aca066438953f36c0cbdb5a18b',11,1,'Viviana Jose Manel','[]',0,'2023-03-24 05:58:19','2023-03-24 05:58:19','2023-03-29 23:58:19');
/*!40000 ALTER TABLE `oauth_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_auth_codes`
--

DROP TABLE IF EXISTS `oauth_auth_codes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_auth_codes` (
  `id` varchar(100) NOT NULL,
  `user_id` bigint(20) unsigned NOT NULL,
  `client_id` bigint(20) unsigned NOT NULL,
  `scopes` text DEFAULT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_auth_codes_user_id_index` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_auth_codes`
--

LOCK TABLES `oauth_auth_codes` WRITE;
/*!40000 ALTER TABLE `oauth_auth_codes` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_auth_codes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_clients`
--

DROP TABLE IF EXISTS `oauth_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` bigint(20) unsigned DEFAULT NULL,
  `name` varchar(191) NOT NULL,
  `secret` varchar(100) DEFAULT NULL,
  `provider` varchar(191) DEFAULT NULL,
  `redirect` text NOT NULL,
  `personal_access_client` tinyint(1) NOT NULL,
  `password_client` tinyint(1) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_clients_user_id_index` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_clients`
--

LOCK TABLES `oauth_clients` WRITE;
/*!40000 ALTER TABLE `oauth_clients` DISABLE KEYS */;
INSERT INTO `oauth_clients` VALUES (1,NULL,'Laravel Personal Access Client','npPUUYNEsYSwJ8gCtEOJq8og2xNChCTl1NplEmgn',NULL,'http://localhost',1,0,0,'2023-02-13 16:50:20','2023-02-13 16:50:20'),(2,NULL,'Laravel Password Grant Client','CKnGN5kTog2deEp3ifO9CT6G0kM2YL90ODNibjHZ','users','http://localhost',0,1,0,'2023-02-13 16:50:20','2023-02-13 16:50:20');
/*!40000 ALTER TABLE `oauth_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_personal_access_clients`
--

DROP TABLE IF EXISTS `oauth_personal_access_clients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_personal_access_clients` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `client_id` bigint(20) unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_personal_access_clients`
--

LOCK TABLES `oauth_personal_access_clients` WRITE;
/*!40000 ALTER TABLE `oauth_personal_access_clients` DISABLE KEYS */;
INSERT INTO `oauth_personal_access_clients` VALUES (1,1,'2023-02-13 16:50:20','2023-02-13 16:50:20');
/*!40000 ALTER TABLE `oauth_personal_access_clients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_refresh_tokens`
--

DROP TABLE IF EXISTS `oauth_refresh_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `oauth_refresh_tokens` (
  `id` varchar(100) NOT NULL,
  `access_token_id` varchar(100) NOT NULL,
  `revoked` tinyint(1) NOT NULL,
  `expires_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `oauth_refresh_tokens_access_token_id_index` (`access_token_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_refresh_tokens`
--

LOCK TABLES `oauth_refresh_tokens` WRITE;
/*!40000 ALTER TABLE `oauth_refresh_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `oauth_refresh_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `objectivos_cursos`
--

DROP TABLE IF EXISTS `objectivos_cursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `objectivos_cursos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `objetivo` varchar(191) NOT NULL,
  `id_curso` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `objectivos_cursos_id_curso_foreign` (`id_curso`),
  CONSTRAINT `objectivos_cursos_id_curso_foreign` FOREIGN KEY (`id_curso`) REFERENCES `recursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `objectivos_cursos`
--

LOCK TABLES `objectivos_cursos` WRITE;
/*!40000 ALTER TABLE `objectivos_cursos` DISABLE KEYS */;
INSERT INTO `objectivos_cursos` VALUES (1,'Realizar rompecabezas de complejidad creciente',1,'2023-03-28 13:45:50','2023-03-27 13:45:50'),(2,'Percibir, identificar e interiorizar a través de la visión ampliando el campo perceptivo visual.',1,'2023-03-27 13:45:50','2023-03-27 13:45:50'),(3,'Encontrar relaciones de igualdad entre dos o más objetos o figuras.',1,'2023-03-27 13:48:55','2023-03-27 13:48:55'),(4,'Encontrar relaciones de semejanza entre dos o más objetos o figuras',1,'2023-03-27 13:49:10','2023-03-27 13:49:10'),(5,'Encontrar relaciones de semejanza entre dos o más objetos o figuras',1,'2023-03-27 13:49:34','2023-03-27 13:49:34');
/*!40000 ALTER TABLE `objectivos_cursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `password_resets`
--

DROP TABLE IF EXISTS `password_resets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `password_resets` (
  `email` varchar(191) NOT NULL,
  `token` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `password_resets`
--

LOCK TABLES `password_resets` WRITE;
/*!40000 ALTER TABLE `password_resets` DISABLE KEYS */;
/*!40000 ALTER TABLE `password_resets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `personal_access_tokens`
--

DROP TABLE IF EXISTS `personal_access_tokens`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `personal_access_tokens` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `tokenable_type` varchar(191) NOT NULL,
  `tokenable_id` bigint(20) unsigned NOT NULL,
  `name` varchar(191) NOT NULL,
  `token` varchar(64) NOT NULL,
  `abilities` text DEFAULT NULL,
  `last_used_at` timestamp NULL DEFAULT NULL,
  `expires_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `personal_access_tokens_token_unique` (`token`),
  KEY `personal_access_tokens_tokenable_type_tokenable_id_index` (`tokenable_type`,`tokenable_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `personal_access_tokens`
--

LOCK TABLES `personal_access_tokens` WRITE;
/*!40000 ALTER TABLE `personal_access_tokens` DISABLE KEYS */;
/*!40000 ALTER TABLE `personal_access_tokens` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `privilegios`
--

DROP TABLE IF EXISTS `privilegios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `privilegios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `description` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `privilegios`
--

LOCK TABLES `privilegios` WRITE;
/*!40000 ALTER TABLE `privilegios` DISABLE KEYS */;
INSERT INTO `privilegios` VALUES (3,'Registro de usuarios administradores',NULL,NULL),(4,'Modificar Datos de usuarios',NULL,NULL),(5,'Registrar Roles',NULL,NULL),(6,'Modificar a a usuario inactivo',NULL,NULL),(7,'Modificar Roles',NULL,NULL),(8,'Asignar roles a permisos',NULL,NULL),(9,'registrar permisos',NULL,NULL),(11,'modificar permisos',NULL,NULL),(12,'ver usuarios',NULL,NULL),(13,'ver roles',NULL,NULL),(14,'ver permisos',NULL,NULL),(15,'ver asociaciones',NULL,NULL),(16,'ver cursos',NULL,NULL),(17,'ver productos',NULL,NULL),(18,'Respalo base de datos',NULL,NULL),(19,'revision de curso',NULL,NULL),(20,'aceptar  para publicar curso',NULL,NULL),(21,'agregar tipo de recurso',NULL,NULL),(22,'editar tipo de recursos',NULL,NULL),(23,'Agregar curso',NULL,NULL);
/*!40000 ALTER TABLE `privilegios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_secret_users`
--

DROP TABLE IF EXISTS `question_secret_users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_secret_users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_user` bigint(20) unsigned DEFAULT NULL,
  `id_questionSecret` bigint(20) unsigned DEFAULT NULL,
  `answer` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `question_secret_users_id_user_foreign` (`id_user`),
  KEY `question_secret_users_id_questionsecret_foreign` (`id_questionSecret`),
  CONSTRAINT `question_secret_users_id_questionsecret_foreign` FOREIGN KEY (`id_questionSecret`) REFERENCES `queston_secrets` (`id`),
  CONSTRAINT `question_secret_users_id_user_foreign` FOREIGN KEY (`id_user`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_secret_users`
--

LOCK TABLES `question_secret_users` WRITE;
/*!40000 ALTER TABLE `question_secret_users` DISABLE KEYS */;
INSERT INTO `question_secret_users` VALUES (1,9,6,'Ozzy Osbourne','2023-03-24 03:27:15','2023-03-24 03:27:15'),(2,13,1,'nose',NULL,NULL);
/*!40000 ALTER TABLE `question_secret_users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `queston_secrets`
--

DROP TABLE IF EXISTS `queston_secrets`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `queston_secrets` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `questionsSecret` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `queston_secrets`
--

LOCK TABLES `queston_secrets` WRITE;
/*!40000 ALTER TABLE `queston_secrets` DISABLE KEYS */;
INSERT INTO `queston_secrets` VALUES (1,'¿Cual fue el nombre de tu primer mascota?','2023-03-24 09:16:18','2023-03-24 09:16:18'),(2,'¿Cual es el nombre de tu primer pareja?','2023-03-24 09:16:18','2023-03-24 09:16:18'),(3,'¿Nombre de la calle donde cresiste?','2023-03-24 09:17:19','2023-03-24 09:17:19'),(4,'¿Que es la cosa que menos te gusta de ti?','2023-03-24 09:18:27','2023-03-24 09:18:27'),(5,'¿Cual es el nombre de tu profesor favorito?','2023-03-24 09:19:20','2023-03-24 09:19:20'),(6,'¿Cual es el nombre de tu artista favorito?','2023-03-24 09:20:21','2023-03-24 09:20:21');
/*!40000 ALTER TABLE `queston_secrets` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `recursos`
--

DROP TABLE IF EXISTS `recursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `recursos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `Descripcion` varchar(191) NOT NULL,
  `tipo` varchar(191) NOT NULL,
  `precio` varchar(191) NOT NULL,
  `id_Usuario` bigint(20) unsigned DEFAULT NULL,
  `id_asociasion` bigint(20) unsigned DEFAULT NULL,
  `id_Estado` bigint(20) unsigned DEFAULT NULL,
  `tipyRec` bigint(20) unsigned DEFAULT NULL,
  `vistaprevia` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `recursos_id_usuario_foreign` (`id_Usuario`),
  KEY `recursos_id_asociasion_foreign` (`id_asociasion`),
  KEY `recursos_id_estado_foreign` (`id_Estado`),
  KEY `recursos_tipyrec_foreign` (`tipyRec`),
  CONSTRAINT `recursos_id_asociasion_foreign` FOREIGN KEY (`id_asociasion`) REFERENCES `asociasiones` (`id`),
  CONSTRAINT `recursos_id_estado_foreign` FOREIGN KEY (`id_Estado`) REFERENCES `estados` (`id`),
  CONSTRAINT `recursos_id_usuario_foreign` FOREIGN KEY (`id_Usuario`) REFERENCES `users` (`id`),
  CONSTRAINT `recursos_tipyrec_foreign` FOREIGN KEY (`tipyRec`) REFERENCES `tiporecursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recursos`
--

LOCK TABLES `recursos` WRITE;
/*!40000 ALTER TABLE `recursos` DISABLE KEYS */;
INSERT INTO `recursos` VALUES (1,'Juego rompecabezas','juego de mesa cuyo objetivo es formar una figura combinando correctamente las partes de esta','gratis','0',13,1,3,1,'ewfasfsadfasd.jpg',NULL,NULL),(2,'Hundir la Flota','Este es un juego matemático clásico y muy fácil de llevar al aula en formato papel. Introducir este tipo de juegos en el aula favorece muchos aprendizajes','gratis','0',13,1,3,1,'hundir la flota casero_01.jpg',NULL,NULL),(3,'Morfologico','Es un sistema novedoso que, a través de diferentes retos, consigue que los alumnos se sientan atraídos por el aprendizaje y análisis de las categorías gramaticales de palabras','gratis','0',13,1,3,1,'1842a04e4467ac3ba59e403ba0a2e302.jpg',NULL,NULL),(4,'Enseñar a leer','Aprende a como controlar mejor los aspectos de lectura de tu hijo','gratis','0',13,1,3,2,'reading-to-son-1429252-1280x960-3828376458.png',NULL,NULL),(5,'Competencia de memoria','Aprende a como controlar mejor los aspectos de fortalecimiento de memoria de tu hijo','gratis','0',13,1,3,2,'Actividades-para-niños-con-discapacidad-intelectual.webp',NULL,NULL),(6,'13efad','3asdfae','feafewf','0',13,1,1,3,'',NULL,NULL);
/*!40000 ALTER TABLE `recursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rol__privilegios`
--

DROP TABLE IF EXISTS `rol__privilegios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rol__privilegios` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `id_rol` bigint(20) unsigned DEFAULT NULL,
  `id_privilegio` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `rol__privilegios_id_rol_foreign` (`id_rol`),
  KEY `rol__privilegios_id_privilegio_foreign` (`id_privilegio`),
  CONSTRAINT `rol__privilegios_id_privilegio_foreign` FOREIGN KEY (`id_privilegio`) REFERENCES `privilegios` (`id`),
  CONSTRAINT `rol__privilegios_id_rol_foreign` FOREIGN KEY (`id_rol`) REFERENCES `rols` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rol__privilegios`
--

LOCK TABLES `rol__privilegios` WRITE;
/*!40000 ALTER TABLE `rol__privilegios` DISABLE KEYS */;
INSERT INTO `rol__privilegios` VALUES (1,3,3,'2023-03-26 12:50:04','2023-03-26 12:50:04'),(2,3,4,'2023-03-26 12:50:04','2023-03-26 12:50:04'),(3,3,5,'2023-03-26 12:50:40','2023-03-26 12:50:40'),(4,2,6,'2023-03-26 12:50:57','2023-03-26 12:50:57'),(5,3,7,'2023-03-26 12:51:27','2023-03-26 12:51:27'),(6,3,8,'2023-03-26 12:51:27','2023-03-26 12:51:27'),(7,3,9,'2023-03-26 12:52:46','2023-03-26 12:52:46'),(8,3,11,'2023-03-26 12:52:46','2023-03-26 12:52:46'),(9,3,12,'2023-03-26 12:53:32','2023-03-26 12:53:32'),(10,3,13,'2023-03-26 12:53:50','2023-03-26 12:53:50'),(11,3,14,'2023-03-26 12:54:10','2023-03-26 12:54:10'),(12,3,15,NULL,NULL),(13,3,16,NULL,NULL),(14,3,17,NULL,NULL),(15,3,18,NULL,NULL),(16,11,23,NULL,NULL),(17,11,22,NULL,NULL);
/*!40000 ALTER TABLE `rol__privilegios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `rols`
--

DROP TABLE IF EXISTS `rols`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rols` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `rol` varchar(191) NOT NULL,
  `Description` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rols`
--

LOCK TABLES `rols` WRITE;
/*!40000 ALTER TABLE `rols` DISABLE KEYS */;
INSERT INTO `rols` VALUES (1,'usuario cliente','Usuario de registro de pagina web','2023-02-23 14:05:14','2023-02-23 14:05:14'),(2,'usuario inactivo','El usuario usara esta cuenta al cambiar a su estado inactivo','2023-02-23 22:36:07','2023-02-23 22:36:07'),(3,'Super adminstrador','Acceso al panel de administración del sitio web:','2023-03-20 04:59:22','2023-03-20 04:59:22'),(10,'Administrador','Administrador secundario',NULL,NULL),(11,'Creador de cursos','Creador de cursos para sitio web',NULL,NULL);
/*!40000 ALTER TABLE `rols` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seccions`
--

DROP TABLE IF EXISTS `seccions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `seccions` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(191) NOT NULL,
  `descripcion` varchar(500) NOT NULL,
  `plataforma` varchar(191) NOT NULL,
  `url` varchar(191) NOT NULL,
  `id_curso` bigint(20) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `seccions_id_curso_foreign` (`id_curso`),
  CONSTRAINT `seccions_id_curso_foreign` FOREIGN KEY (`id_curso`) REFERENCES `recursos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seccions`
--

LOCK TABLES `seccions` WRITE;
/*!40000 ALTER TABLE `seccions` DISABLE KEYS */;
INSERT INTO `seccions` VALUES (1,'Sección 1','¿Que aprenderás en este curso?','Youtube','https://www.youtube.com/watch?v=s6-BNGlLOMA',1,NULL,NULL),(2,'Sección 2','Rompecabezas sencillo','Youtube','https://www.youtube.com/watch?v=_s7LWldfXaw&list=PLGCqUQzNP3EsVxrQkxo9H1Yv-ki9Vzn0Z',1,NULL,NULL),(3,'Sección 3','Mejorando concentracion','Youtube','https://www.youtube.com/watch?v=Lf_fcdyHt-w&list=PLGCqUQzNP3EsVxrQkxo9H1Yv-ki9Vzn0Z&index=2',1,NULL,NULL),(4,'Sección 4','Resultado finales','Youtube','https://www.youtube.com/watch?v=-QWpBHUGrLw&list=PLGCqUQzNP3EsVxrQkxo9H1Yv-ki9Vzn0Z&index=3',1,NULL,NULL);
/*!40000 ALTER TABLE `seccions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tiporecursos`
--

DROP TABLE IF EXISTS `tiporecursos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `tiporecursos` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `description` varchar(191) NOT NULL,
  `img` varchar(191) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tiporecursos`
--

LOCK TABLES `tiporecursos` WRITE;
/*!40000 ALTER TABLE `tiporecursos` DISABLE KEYS */;
INSERT INTO `tiporecursos` VALUES (1,'Gamificación educativa','Aquí encontrarás todo respecto a gamificación educativa, desde información hasta ejercicios para implementarlo detro del aula.','gamificacion.jpg',NULL,NULL),(2,'Videos educativos','En este apartado encontrarás una colección de videos educativos para un mejor desempeño en el aula y en la vida cotidiana.\r\n\r\n','videos_edu.jpg',NULL,NULL),(3,'Comunidades de aprendizaje','En este apartado del sitio encontrarás cominidades de aprendizaje','comunidad_aprend.jpg',NULL,NULL),(4,'Plataformas educativas','Aquí encontrarás una colección de plataformas educativas enfocadas a la educación especial.','plataformas_edu.jpg',NULL,NULL),(5,'Información','En este apartado encontrarás toda la información referente a la discapacidad intelectual','informacion.png',NULL,NULL),(6,'Juegos didácticos','Juegos interactivos que pueden poner en práctica dentro del aula o en casa.','juegos_didac.jpg',NULL,NULL),(7,'Consejos','Consejos de especialistas en el tema','consejos.png',NULL,NULL),(8,'Consejos','Acerca de como mejorar aspectos de la vida cotidiana desde casa o en el aula.','tips.jpg',NULL,NULL),(10,'prueba','prueba','1679862245280092539_524583199373354_5368939730743918794_n.jpg',NULL,NULL);
/*!40000 ALTER TABLE `tiporecursos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) NOT NULL,
  `nameUser` varchar(191) NOT NULL,
  `phone` varchar(191) NOT NULL,
  `email` varchar(191) NOT NULL,
  `email_verified_at` timestamp NULL DEFAULT NULL,
  `password` varchar(191) NOT NULL,
  `typeUser` bigint(20) unsigned DEFAULT NULL,
  `remember_token` varchar(100) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`),
  KEY `users_typeuser_foreign` (`typeUser`),
  CONSTRAINT `users_typeuser_foreign` FOREIGN KEY (`typeUser`) REFERENCES `rols` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=14 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (8,'Brayan Andrade Hernandez','20200697BAH','7713526698','20200697@uthh.edu.mx',NULL,'$2y$10$OUaWeOzYaflH9630kBKiGeeRRS6CZooWtzWaeAwAPNeN0SWn7sgZq',3,NULL,NULL,NULL),(9,'Brayan Andrade Hernadez','andrade15','77812731','andradehernadez5@gmail.com',NULL,'$2y$10$ojlNLTq9Wh3pc5wsi0fNE.0gYua4oby7rmvrFEQcSNWrQluRZHB/6',1,NULL,NULL,NULL),(11,'Viviana Jose Manel','20200965VJS','772317293','20200965@uthh.edu.mx',NULL,'$2y$10$8h/bAwg729aP7hY/K0765.reo1iUTR011DpABSxtQ1c7KKjmrbD7.',10,NULL,NULL,NULL),(13,'Hernadez Hernandez Martinez Manuel','camHuejutla2023','773918231','camHuejutla2023@gmail.com',NULL,'$2y$10$HuYbnkLXM3f1RDG8CvBO1ejJEqsSrHl1lrObtvRdF7fO7WwzUTph6',11,NULL,NULL,NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-03-28  8:39:21
