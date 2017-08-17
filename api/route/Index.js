var path = require('path');
var Account = require('./Account');
<<<<<<< HEAD
// var Product = require('./Product');
var PurcharsOrder = require('./Entering');



=======
var PurcharsOrder = require('./PurcharsOrder2');

var Qcompile = require('./Qcompile');
var Pos = require('./Pos')
>>>>>>> 2fc03c95f59b403bfcfd726fba799da7b408e787

module.exports = {
    Register: function(express){
        var app = express();
        app.all('*', function(req, res, next) {
		    res.header("Access-Control-Allow-Origin", "*");
		    res.header("Access-Control-Allow-Headers", "Content-Type,Content-Length, Authorization, Accept,X-Requested-With");
		    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
		    res.header("X-Powered-By",' 3.2.1')
		    if(req.method=="OPTIONS") {
		      res.send(200);//让options请求快速返回
		    } else{
		      next();
		    }
		});
        Account.Register(app);
        // Product.Register(app);


 



        Qcompile.Register(app);
        Pos.Register(app);

        PurcharsOrder.Register(app);
        app.listen(999);
    }
}
// exports.Register = function(express){
// 	var app = express();
// 	Account.Register(app);
//     Product.Register(app);

//     app.listen(888);
// }