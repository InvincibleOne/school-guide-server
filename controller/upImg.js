const fs = require("fs");

const path = require( 'path' )

const formidable = require('formidable');

function copyImg( uri, username, imgName ) {
    var date = new Date();
    var time = 'avator_' + date.getTime() + "_";
    var tempImgName = time + imgName
    var dirUrl = uri + '/copyImg/' + username
    if ( fs.existsSync( dirUrl ) ){
        var files = [];
        files = fs.readdirSync( dirUrl );
        files.forEach(function (file, index) {
            var curPath = path.join(dirUrl, file);
            fs.unlinkSync(curPath);
        })
    }
    else {
        fs.mkdirSync( dirUrl )
    }
    fs.readFile( path.join( uri,  imgName ) ,function( err,originBuffer ) {            //读取图片位置（路径）
        fs.writeFile( path.join( uri + '/copyImg/' + username,  tempImgName ), originBuffer, function( err ) {      //生成图片2(把buffer写入到图片文件)
            if ( err ) {
                console.log( err )
            }
        });
    } )
    return  tempImgName 
}

function upImg( req, res, uri ){
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = uri;
    form.keepExtensions = true;//保留后缀
    form.maxFieldsSize = 3 * 1024 * 1024;
    //处理图片
    form.parse(req, function (err, fields, files){
        // var filename = files.file.name
        // var nameArray = filename.split('.');
        // var type = nameArray[nameArray.length - 1];
        // var name = '';
        // for (var i = 0; i < nameArray.length - 1; i++) {
        //     name = name + nameArray[i];
        // }
        // var date = new Date();
        // var time = '_' + date.getFullYear() + "_" + date.getMonth() + "_" + date.getDay() + "_" + date.getHours() + "_" + date.getMinutes();
        // var avatarName = name + time + '.' + type;
        var name = files.file.name.split('&')
        var newPath = form.uploadDir + "/" + name[0];
        fs.renameSync(files.file.path, newPath);  //重命名
        var img_name = copyImg( uri, name[1], name[0] )
        res.json( {
            res_code:0,
            data:{
                avatorImgPath: '/public/images/person/copyImg/' + name[1] + '/' +  img_name
            },
        } )
    })
}

module.exports = upImg