/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : supermarket

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-08-17 17:20:54
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for superlier
-- ----------------------------
DROP TABLE IF EXISTS `superlier`;
CREATE TABLE `superlier` (
  `indexID` int(11) NOT NULL AUTO_INCREMENT,
  `superlierName` varchar(255) NOT NULL,
  `Tel` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `creatTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `creatUser` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`indexID`)
) ENGINE=MyISAM AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of superlier
-- ----------------------------
INSERT INTO `superlier` VALUES ('1', '浙江凤阳山食品有限公司', '136666666', null, '2017-08-14 20:55:52', '家如');
INSERT INTO `superlier` VALUES ('2', '浙江晨光食品食品有限公司', '135555', null, '2017-08-14 20:55:57', '家如');
INSERT INTO `superlier` VALUES ('3', '龙泉绿瓯食品有限公司', null, null, '2017-08-14 20:55:37', null);
