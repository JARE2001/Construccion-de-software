DROP DATABASE IF EXISTS `TiendaRECON`;
CREATE DATABASE `TiendaRECON`; 
USE `TiendaRECON`;


SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `productos` (
  `id` int(11)  AUTO_INCREMENT NOT NULL,
  `nombre` varchar(60) COLLATE utf8_spanish2_ci NOT NULL,
  `imagen` varchar(400) COLLATE utf8_spanish2_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_spanish2_ci;



INSERT INTO `productos` (`nombre`, `imagen`, `created_at`) VALUES
('Jeans', ' https://resources.sears.com.mx/medios-plazavip-sears/fotos/productos_sears1/original/2533561.jpg', '2021-03-04 17:48:02'),
('Blusa', 'https://images-na.ssl-images-amazon.com/images/I/612zyDY7iiL._AC_UX385_.jpg', '2021-03-04 17:48:02'),
('Sudadera', 'https://www.sudebasket.com/2942-thickbox_default/sudadera-capucha-keya-100-negro.jpg', '2021-03-04 17:48:35'),
('Gorra', 'https://www.dpstreet.mx/wcsstore/ExtendedSitesCatalogAssetStore/images/catalog/zoom/4011084-0001V1.jpg', '2021-03-04 17:48:35');

