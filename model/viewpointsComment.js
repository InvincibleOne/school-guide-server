var createTable = require( './dbconnect' )

var tableName = 'Viewpointscomment'

var contraints = {
    school:{
        type: String,
        trim: true,
        required: true
    },
    viewpoint:{
        type: String,
        trim: true,
        required: true
    },
    username:{
        type: String,
        trim: true,
        required: true
    },
    add_time: {
        type: Date,
        trim: true,
        required: true,
    },
    avator_address: {
        type: String,
        trim: true,
        required: true,
    },
    content: {
        type: String,
        trim: true,
    },
    prime: {
        type: Number,
        default:0
    }
}
var viewPointsComment = createTable( tableName, contraints )

module.exports = viewPointsComment