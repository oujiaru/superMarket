/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : supermarket

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-08-17 17:20:34
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for product
-- ----------------------------
DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `indexID` int(11) NOT NULL AUTO_INCREMENT,
  `productName` varchar(255) DEFAULT NULL,
  `barCode` varchar(255) DEFAULT NULL,
  `category` varchar(255) DEFAULT NULL,
  `superlierID` int(11) DEFAULT NULL,
  `unit` varchar(255) DEFAULT NULL,
  `qty` int(11) DEFAULT NULL,
  `retailprice` decimal(10,2) DEFAULT NULL,
  `stockprice` decimal(10,2) DEFAULT NULL,
  `creatTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`indexID`)
) ENGINE=MyISAM AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of product
-- ----------------------------
INSERT INTO `product` VALUES ('1', '10kg什湖特选东北大米\r\n', '6948196600045\r\n', '米类', null, '袋', '1', '50.00', '70.00', '2017-08-14 20:56:22');
INSERT INTO `product` VALUES ('2', '10kg什湖特选东北大米\r\n', '6948196600045\r\n', '米类', null, '袋', '1', '50.00', '70.00', '2017-08-14 20:56:26');
