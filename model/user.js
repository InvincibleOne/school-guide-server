var createTable = require( './dbconnect' )

//表名大写单数，mongo自动转为小写复数
var tableName = 'User'

var contraints = {
    username:{
        type: String,
        trim: true,
        required: true
    },
    password: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        default: ''
    }
}

var User = createTable( tableName, contraints)

module.exports = User

// var user = new User({
//     username: 'haha',
//     password: 123321
// })
// user.save( ( err, ret ) => {
//     if ( err ) {
//         console.log( err )
//     }
//     else {
//         console.log( ret )
//     }
// } )

// async function save( user ){
//     User.findOne( { 'username' : user.username }, ( err, ret ) => {
//         if ( err ) {
//             console.log( err )
//             return { res_code: 500,message: '服务器错误！' }
//         }
//         else {
//             if ( ret == null ) {
//                 new User( user ).save( ( err, ret ) => {
//                     if ( err ) {
//                         console.log( err )
//                         return { res_code: 500,message: '服务器错误！' }
//                     }
//                     else {
//                         console.log( ret )
//                         return { res_code: 0,message: '注册成功！' }
//                     }
//                 } )
//             }
//             else {
//                 console.log( 'yicuz')
//                 //return { res_code: 1,message: '用户名已存在，请重新输入！' }
//                 return '111'
//             }
//         }
//     } )
// }

// module.exports = {
//     'save': save
// }
// var user = {
//     username: 'hahahahaha',
//     password: 123321
// }
// save( user )