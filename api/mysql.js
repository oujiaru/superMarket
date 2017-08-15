var mysql = require('mysql');

//要操作的数据库
var database = 'superma';
module.exports = {
	add: function(list, data, callback){
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : '',
		  database : database
		});
		connection.connect();
		var arr = [], item = '', str = '';
		for(var key in data){
			arr.push(data[key]);
			item += (key+',');
			str += '?,'
		}
		item = item.slice(0,-1);
		str = str.slice(0,-1);
		var  addSql = 'INSERT INTO' + ' ' + list + '(' + item + ') VALUES('+ str +')';
		// var  addSqlParams = [data.Code, data.Name, data.Price, data.Unit, data.Type, data.Standard, data.SupplierID];
		connection.query(addSql, arr, function (err, result) {
		    if(!err){
			    if(callback && typeof callback == 'function'){
			    	callback(result);
			    }
		    }          
		});
		connection.end();
	},
	delete: function(list, data, callback){
		var connection = mysql.createConnection({
				host     : 'localhost',
				user     : 'root',
				password : '',
				database : database
			});
		connection.connect();
		var id = Object.keys(data);
		console.log(id);
		var delSql = 'DELETE FROM ' + ' ' + list + ' where '+ ' ' + id +'=' +data[id];
		console.log(delSql)
		connection.query(delSql, function(err, result) {
		    if(!err){
			    if(callback && typeof callback == 'function'){
			    	callback(result);
			    }
		    }          
		});
		connection.end();
	},
	update: function(list, data, callback){
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : '',
		  database : database
		});
		connection.connect();
		var arr = [], item = '', id = '';
		for(var key in data){
			arr.push(data[key]);
			item += (key +'= ?,');
			id = key;
		}
		arr.push(data[id]);
		item = item.slice(0,-1);
		var modSql = 'UPDATE' + ' ' + list + ' ' +'SET '+ item+' WHERE '+ id+' = ?';
		console.log(modSql);
		// var modSqlParams = [6666666, '100g', 17];
		// console.log(data)
		// var delSql = 'DELETE FROM ' + ' ' + list + ' where '+ ' ' + id +'=' +data[id];
		connection.query(modSql, arr, function(err, result) {
		    if(!err){
			    if(callback && typeof callback == 'function'){
			    	callback(result);
			    }
		    }          
		});
		connection.end();
	},
	query: function(data, callback){
		var connection = mysql.createConnection({
		  host     : 'localhost',
		  user     : 'root',
		  password : '',
		  database : database
		});
		connection.connect();
		var  sql = 'SELECT * FROM xiao';
		connection.query(sql,function (err, result) {
			console.log(result)
		   if(!err){
			    if(callback && typeof callback == 'function'){
			    	callback(result);

			    }
		    }       
		});
		connection.end();
	}
}
// select
// 	SQL_CALC_FOUND_ROWS
// 	b.IndexID,
// 	a.*
// from
// 	supplier a
// 	inner join product b on a.IndexID = b.supplierid
// where
// 	a.suppliername like '%中国%'
// order by
// 	b.IndexID
// limit 20, 10;
// SELECT FOUND_ROWS();
// 

//var  sql = 'SELECT * FROM goods';
//查
// connection.query(sql,function (err, result) {
//     if(err){
//       console.log('[SELECT ERROR] - ',err.message);
//       return;
//     }

//    console.log('--------------------------SELECT----------------------------');
//    console.log(result);
//    console.log('------------------------------------------------------------\n\n');  
// });

// var connection = mysql.createConnection({
// 		host     : 'localhost',
// 		user     : 'root',
// 		password : '',
// 		database : database
// 	});

// connection.connect();
// var querySql = 'select goods.*, supplier.* from supplier inner join goods on goods.SupplierID = supplier.ID';
// connection.connect(function(err){  
//     if(err){  
//         console.log('与mysql数据库建立连接失败');  
//     }else{  
//         console.log('与mysql数据库建立连接成功');  
//         connection.query(querySql, function(err,result){  
//             if(err){  
//             	console.log(err)
//                 console.log('查询数据失败');  
//             }else{  
//                 console.log('查询数据成功');  
//                 console.log(result);  
//                 connection.end();  
//             }  
//         })  
//     }  
// })  
// connection.end();