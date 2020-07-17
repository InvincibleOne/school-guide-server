const schools = require( '../schools.json' )
function getSchools( req, res ){
    var data = schools[ req.body.province.toLowerCase() ]
    res.status( 200 ).json( {
        res_code:0,
        message: data
    } )
}
module.exports = getSchools