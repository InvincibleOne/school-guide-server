const Comment = require( '../model/comment' )
const ViewpointsComment = require( '../model/viewpointsComment' )
function getComments( req, res ) {
    if ( req.body.type == 'school' ){ 
        Comment.find( ( err, ret ) => {
            if( err ){
                res.status(200).json( {
                    res_code: 500,
                    message: '数据获取出错！'
                } )
            }
            else {
                res.status(200).json( {
                    res_code: 0,
                    message: ret
                } )
            }
        } )
    }
    else if ( req.body.type == 'viewpoint' ){ 
        ViewpointsComment.find( { 'school': req.body.school, 'viewpoint': req.body.viewpoint },  ( err, ret ) => {
            if( err ){
                res.status(200).json( {
                    res_code: 500,
                    message: '数据获取出错！'
                } )
            }
            else {
                res.status(200).json( {
                    res_code: 0,
                    message: ret
                } )
            }
        } )
    }
}

module.exports = getComments