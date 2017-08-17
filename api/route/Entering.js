var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var cookieParser = require('cookie-parser');
var session = require('express-session');

var mysql = require('../lumysql');


module.exports = {
    Register: function(app){
        //设置 session
        app.use(cookieParser());
        app.use(session({
            secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
            name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
            cookie: {maxAge: 80000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
            resave: false,
            saveUninitialized: true,
        }))

        app.post('/addtt',urlencodedParser, function(request, response){
            //请求数据库
        
            console.log(request.body);

            mysql.add('supp', request.body, function(result){
                console.log(request.body)
            });

            
        });   
        app.post('/chaxun',urlencodedParser, function(request, response){
            //请求数据库
        
            // console.log(request.body);
            // response.send('response')
            console.log(request.body)
            mysql.query('supp',request.body, function(result){
              
                response.send(result)



            });
        }); 
        app.post('/num',urlencodedParser, function(request, response){
            //请求数据库
        
            // console.log(request.body);
            // response.send('response')
            console.log(request.body)
            mysql.querynum('supp',request.body, function(result){
              
                response.send(result)



            });
        }); 
      
        
      
        app.post('/Shousuo',urlencodedParser, function(request, response){
            //请求数据库
        
            // console.log(request.body);
            // response.send('response')
            console.log(request.body)


            mysql.queryshou('supp',request.body, function(result){
                    console.log(11)
                    response.send(result)

                
            });
        });   
    }
    
}
