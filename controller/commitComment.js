const Comment = require('../model/comment')
const ViewpointsComment = require( '../model/viewpointsComment' )
function commitComment( req,res ) {
    if ( req.body.type == 'school' ){
        var avatorAddres = '/public/images/login_avator.jpg',
        comment = { "username": req.body.username, "add_time": req.body.add_time, "avator_address": avatorAddres, "content": req.body.content, "prime":req.body.prime }
        new Comment( comment ).save( ( err, ret ) => {
            if ( err ) {
                res.status( 200 ).json( {
                    res_code: 500,
                    message: '服务器错误！'
                } )
            }
            else {
                res.status(200).json( {
                    res_code:0,
                    message: '留言成功！'
                } )
            } 
        } )
    }
    else if ( req.body.type == 'viewpoint' ){
        var avatorAddres = '/public/images/login_avator.jpg',
        viewpointComment = { "school": req.body.school, "viewpoint": req.body.viewpoint, "username": req.body.username, "add_time": req.body.add_time, "avator_address": avatorAddres, "content": req.body.content, "prime":req.body.prime }
        new ViewpointsComment( viewpointComment ).save( ( err, ret ) => {
            if ( err ) {
                res.status( 200 ).json( {
                    res_code: 500,
                    message: '服务器错误！'
                } )
            }
            else {
                res.status(200).json( {
                    res_code:0,
                    message: '留言成功！'
                } )
            } 
        } )
    }
}
module.exports = commitComment