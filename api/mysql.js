var mysql = require('mysql');

var connection = mysql.createConnection({    

    host: 'localhost',//主机
    user: 'root',     //MySQL认证用户名
    password:'',
    port:'3306',
    database: 'superMarket'

});

connection.connect();

var  sql = 'SELECT * FROM product';



connection.query(sql, function (error, results, fields) {
  if (error) throw error;
  // console.log(results);
  
});

connection.end();