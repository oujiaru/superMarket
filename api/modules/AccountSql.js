var mysql = require('mysql');

var database = 'supermarket';

module.exports = {
	query: function(tableName,request,callback){
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : '',
		  database : database
		});
		connection.connect();
		console.log(request);
		var sql = 'SELECT * FROM user WHERE username = '+"'" +request.username+ "'"+' AND password =' + "'"+request.password +"'";


		connection.query(sql,function (err, result) {
			console.log(result)
		   if(!err){
			    if(callback && typeof ncallback == 'function'){
			    	callback(result);
			    }
		    }
		         
		});
		connection.end(); 
	}
};