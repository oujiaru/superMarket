/*
Navicat MySQL Data Transfer

Source Server         : localhost_1703
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : supermarket

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-08-18 08:51:11
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for xiao1
-- ----------------------------
DROP TABLE IF EXISTS `xiao1`;
CREATE TABLE `xiao1` (
  `goodscode` varchar(255) NOT NULL,
  `goodsname` varchar(255) DEFAULT NULL,
  `goodsnumber` varchar(255) DEFAULT NULL,
  `goodsstyle` varchar(255) DEFAULT NULL,
  `goodsnuit` varchar(255) DEFAULT NULL,
  `poprice` varchar(10) DEFAULT NULL,
  `pocount` varchar(255) DEFAULT NULL,
  `goodsmodel` varchar(255) DEFAULT NULL,
  `posupplier` varchar(255) DEFAULT NULL,
  `posubmissiontime` varchar(255) DEFAULT NULL,
  `poacknowledgingtime` varchar(255) DEFAULT NULL,
  `postate` varchar(255) DEFAULT NULL,
  `pobuyer` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`goodscode`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of xiao1
-- ----------------------------
INSERT INTO `xiao1` VALUES ('asdasd', 'asdasd', 'asdasd', 'asdasd', 'adasd', 'asdasd', 'asdasd', 'asdasda', 'asdasd', 'asdasd', 'asdasdasd', '', '');
INSERT INTO `xiao1` VALUES ('sdfsdfsdfsdfsdfsf', '', '', '', '', '', '', '', '', '', '', '', '');
INSERT INTO `xiao1` VALUES ('', '', '', '', '', '', '', '', '', '', '', '', '');
INSERT INTO `xiao1` VALUES ('asdasdasd', 'asdasd', 'asdasd', 'asdasdads', '', '', '', '', '', '', '', '', '');
INSERT INTO `xiao1` VALUES ('sdfsdfsdf', '', '', '', '', '', '', '', '', '', '', '', '');
INSERT INTO `xiao1` VALUES ('21323123', '123123', '123213', '', '', '', '', '', '', '', '', '', '');
INSERT INTO `xiao1` VALUES ('12323123', '123123', '', '', '', '', '', '', '', '', '', '', '');
SET FOREIGN_KEY_CHECKS=1;
