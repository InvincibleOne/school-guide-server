const User = require( '../model/user' )
const path = require( 'path' )
var fs = require("fs");  

function savaAvator( uri, username ) {
    fs.readFile( path.join( uri, '/images/login_avator.jpg' ) ,function( err,originBuffer ) {            //读取图片位置（路径）
    
        fs.writeFile( path.join( uri, '/images/person/' + username + '.jpg' ), originBuffer, function( err ) {      //生成图片2(把buffer写入到图片文件)
            if ( err ) {
                console.log( err )
            }
        });
    } )
}
function register( req, res, uri )  {
    User.findOne( { username: req.body.username }, ( err, ret ) => {
        if ( err ) {
            return res.status( 200 ).json( {
                res_code: 500,
                message: '服务器错误！'
            } )
        }
        else if( ret == null ) {
            user = { 'username' : req.body.username, 'password' : req.body.password }
            new User( user ).save( ( err, ret ) => {
                if ( err ) {
                    return res.status( 200 ).json( {
                        res_code: 500,
                        message: '服务器错误！'
                    } )
                }
                else {
                    savaAvator( uri, req.body.username )
                    res.status(200).json( {
                        res_code:0,
                        message: '注册成功！'
                    } )
                } 
            } )
        }
        else {
            res.status(200).json( {
                res_code:1,
                message: '该用户名已存在！'
            } )
        }
    } )     
}
module.exports = register