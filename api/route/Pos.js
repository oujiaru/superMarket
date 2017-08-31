var bodyParser = require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false });
var cookieParser = require('cookie-parser');
var session = require('express-session');

var mysql = require('../mysql');


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
        }));
        
        app.post('/code', urlencodedParser, function(request, response){
            console.log(request.body.Code);
            mysql.queryCode(request.body.Code, function(result){
                console.log('code11',result)
                response.send(result);
            })
        });
        app.post('/PosLogin', urlencodedParser, function(request, response){
            request.session.name = request.body.name;
            console.log(request.session.name)
            // console.log(request.body)
            // mysql.user(request.body, function(result){            
            //     request.session.name = request.body.name;
            //     console.log(request.session.name)
            //     // request.session.name = request.body.name;
            //     response.send(request.session.name);
            // });      
        })
        // app.get('/PosLogin',function(request, response){
        //     request.session.name = request.query.name;
        //     response.send(request.session.name);
        // })
        app.get('/GetUser', function(request, response){
            console.log(request.session.name)
            if(!request.session.name){
                response.send({statue: false, message: '请先登陆', flag: 0})
            }else{
                response.send({statue: true, message: '已登陆'})
            }
        })
    }
}