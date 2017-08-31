var userSql = require('mysql');

var database = 'supermarket';

module.exports = {
	user: function(tableName,request,callback){

		var connection = userSql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : '',
		  database : database
		});
		connection.connect();
		
		var sql = 'SELECT * FROM user WHERE username = '+"'" +request.username+ "'"+' AND password =' + "'"+request.password +"'";
		console.log('login',sql)

		connection.query(sql,function (err, result) {
			
		   if(!err){
			    if(callback && typeof callback == 'function'){
			    	callback(result);
			    }
		    }else {
		    	console.log('err', err);
		    }
		         
		});
		connection.end(); 
	}
};