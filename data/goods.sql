/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : supermarket

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2017-08-17 17:20:24
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `GUID` int(20) NOT NULL AUTO_INCREMENT,
  `Code` varchar(50) NOT NULL,
  `Name` varchar(255) NOT NULL,
  `Price` float(10,0) NOT NULL,
  `Unit` varchar(255) NOT NULL,
  `Type` varchar(255) NOT NULL,
  `SupplierID` int(20) NOT NULL,
  `CreationTime` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `CreationUser` varchar(255) DEFAULT NULL,
  `ModificationTime` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `ModificationUser` varchar(255) DEFAULT NULL,
  `Standard` varchar(255) NOT NULL,
  PRIMARY KEY (`GUID`)
) ENGINE=MyISAM AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('32', '6927646551120', '娃哈哈纯净水', '3', '瓶', '饮料', '2', '2017-08-08 14:31:21', '饶荣', '2017-08-16 14:31:49', '饶荣', '600ml');
INSERT INTO `goods` VALUES ('31', '6955327600317', '北京方便面', '2', '包', '零食', '2', '2017-08-08 14:28:59', '饶荣', '2017-08-16 14:29:29', '饶荣', '200g');
INSERT INTO `goods` VALUES ('27', '6950512600127', '笔记本', '5', '本', '文具', '3', '2017-08-15 10:11:14', '饶荣', '2017-08-15 10:11:14', '饶荣', '150g');
INSERT INTO `goods` VALUES ('28', '6923450656150', '康师傅冰红茶', '4', '瓶', '饮料', '2', '2017-08-16 14:12:34', '饶荣', '2017-08-16 14:12:34', '饶荣', '1L');
INSERT INTO `goods` VALUES ('29', '6923450601822', '绿箭口香糖', '8', '瓶', '零食', '2', '2017-08-15 10:13:44', '饶荣', '2017-08-15 10:13:44', '饶荣', '100g');
INSERT INTO `goods` VALUES ('30', '6923160532010', '可爱多湿巾', '15', '包', '日用瓶', '4', '2017-08-15 10:14:11', '饶荣', '2017-08-15 10:14:11', '饶荣', '500g');
