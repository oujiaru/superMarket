var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var sql = require('../modules/AccountSql');
var urlencodeParser = bodyParser.urlencoded({ extended: false });
module.exports = {
    Register: function(app){
        //设置 session
        app.use(cookieParser());
        app.use(session({
            secret: '12345',//用来对session数据进行加密的字符串.这个属性值为必须指定的属性
            name: 'testapp',   //这里的name值得是cookie的name，默认cookie的name是：connect.sid
            cookie: {maxAge: 800000 },  //设置maxAge是80000ms，即80s后session和相应的cookie失效过期
            resave: false,
            saveUninitialized: true,
        }))

        app.get('/login', function(request, response){
            //请求数据库，如果正确，则记录登陆状态
            console.log(request.query)
            sql.user('user',request.query, function(res){
                request.session.name = request.query.username
                console.log('api',666)
                if(res.length>0){
                    response.send({status: true,data:request.session.name});
                }else{
                    response.send({status: false,message:'用户名或密码错误'});
                }

            });
            
            

            // response.send({state: true});
            
        });
        app.get('/getuser',function(request,response){
            console.log(request.session.name)
             if(request.session.name){
                response.send({statue: true})
            }else{
                response.send('6666')
            }
        })
        app.post("/register", function(request, response){})

        app.get('/setSession', function(request, response){
            request.session.username = 'dk';
            response.send(request.session.username)
        })

        app.get('/getSession', function(request, response){
            response.send(request.session.username);
        })

        app.get('/getproduct', function(request, response){
            if(!request.session.usernmae){
                response.send({statue: false, message: '请先登陆', flag: 0})
            }
        })
    }
}