var createTable = require( './dbconnect' )

var tableName = 'Comment'

var contraints = {
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
var comment = createTable( tableName, contraints )

module.exports = comment