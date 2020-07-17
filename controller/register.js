const User = require( '../model/user' )
function register( req, res )  {
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