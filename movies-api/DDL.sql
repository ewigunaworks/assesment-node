CREATE DATABASE `assessment` /*!40100 DEFAULT CHARACTER SET latin1 */;

-- assessment.history_logs definition

CREATE TABLE `history_logs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `url` varchar(100) DEFAULT NULL,
  `path` varchar(100) DEFAULT NULL,
  `parameters` text,
  `created_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=latin1;
