
mongo mongodb://112.74.164.4:27017  //shell 连接远程数据库
show dbs
use dbname
db  //查看当前所用数据库名字
show collections  //显示条目

db.students.find()  //查看学生表信息


1   yarn init -y
2   yarn add express
3   yran add mongoose
4   yarn add cookie-parser -S  
5   cookie的配置 app.js引入插件，设置请求头信息等 router.js中设置cookies内容
6  yarn add body-parser -S
7  post请求的配置 app.js中