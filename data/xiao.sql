/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : supermarket

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-08-17 17:21:13
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for xiao
-- ----------------------------
DROP TABLE IF EXISTS `xiao`;
CREATE TABLE `xiao` (
  `goodscode` varchar(255) NOT NULL,
  `goodsname` varchar(255) DEFAULT NULL,
  `goodsnumber` int(11) DEFAULT NULL,
  `goodsstyle` varchar(255) DEFAULT NULL,
  `goodsnuit` varchar(255) DEFAULT NULL,
  `goodsprice` decimal(10,2) DEFAULT NULL,
  `menberprice` decimal(10,2) DEFAULT NULL,
  `goodsmodel` varchar(255) NOT NULL,
  PRIMARY KEY (`goodscode`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xiao
-- ----------------------------
