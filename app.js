
const express = require( 'express' )

const router = require( './router' )

const path = require( 'path' )

const app = express()

const bodyParser = require('body-parser');
app.use(bodyParser.json());//数据JSON类型
app.use(bodyParser.urlencoded({ extended: false }));//解析post请求数据

const cookieParser = require("cookie-parser")

//设置cookie,其中()里面的是密钥，随便写
app.use(cookieParser("cookie"))

//开放目录,可直接访问到目录下面的资源，如  xxx.com/public/a.jpg等
//path.join 解决绝对路径问题  /public/为浏览器地址栏请求资源的名称，可任意取  
//注意：require没有路径问题
app.use( '/public/', express.static( path.join( __dirname, './public' ) ) )

app.use(function(req, res, next){
    //设置跨域访问
    res.header('Access-Control-Allow-Origin', 'http://127.0.0.1:3001');
    // res.header('Access-Control-Allow-Origin', 'http://192.168.0.110:3001');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Credentials", true); //可以带cookies
    if (req.method == 'OPTIONS') {
        res.send(200); /*让options请求快速返回*/
    }else {
        next();
    }
})

app.use( router )

app.listen( 5000, () => {
    // console.log( 'running!' )   
} )    