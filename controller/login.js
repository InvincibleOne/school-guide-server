const User = require( '../model/user' )
function login( req, res )  {
    user = { 'username' : req.body.username, 'password' : req.body.password }
    User.findOne( user, ( err, ret ) => {
        if ( err ) {
            return res.status( 200 ).json( {
                res_code: 500,
                message: '服务器错误！'
            } )
        }
        else if( ret != null ) {
            res.status(200).json( {
                res_code:0,
                message: '登录成功！'
            } )
        }
        else {
            res.status(200).json( {
                res_code:1,
                message: '账号或密码错误！'
            } )
        }
    } )     
}
module.exports = login