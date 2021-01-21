-- Este script crea la estructura para las tablas Matricula y matricula_copy.
-- El mismo es complementario para el script bajado de HeidiSQL
use matricula;
CREATE TABLE `matricula` (
	`matricula` VARCHAR(10) NOT NULL,
	`apellido` VARCHAR(255) NULL DEFAULT NULL,
	`ult_pago` VARCHAR(6) NULL DEFAULT NULL,
	`dni` VARCHAR(20) NULL DEFAULT NULL,
	`institucion` VARCHAR(255) NULL DEFAULT NULL,
	`titulo` VARCHAR(255) NULL DEFAULT NULL,
	`fechamat` DATETIME NULL DEFAULT NULL,
	`estado` VARCHAR(2) NULL DEFAULT NULL,
	`texto` VARCHAR(255) NULL DEFAULT NULL
)
COLLATE='utf8_general_ci'
ENGINE=MyISAM
;

create table matricula_copy (
  `matricula` VARCHAR(10) NOT NULL,
  `apellido` VARCHAR(255) NULL DEFAULT NULL,
  `ult_pago` VARCHAR(6) NULL DEFAULT NULL,
  `dni` VARCHAR(20) NULL DEFAULT NULL,
  `institucion` VARCHAR(255) NULL DEFAULT NULL,
  `titulo` VARCHAR(255) NULL DEFAULT NULL,
  `fechamat` DATETIME NULL DEFAULT NULL,
  `estado` VARCHAR(2) NULL DEFAULT NULL,
  `texto` VARCHAR(255) NULL DEFAULT NULL
)
COLLATE='utf8_general_ci'
ENGINE=MyISAM
;
