var mongoose = require( 'mongoose' )
//import mongoose from 'mongoose'

var Schema = mongoose.Schema

var url = 'mongodb://112.74.164.4/app'

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then( ( ) => {
    // console.log( 'connection success' )
})
.catch( err => {
    // console.log( 'connection faild' )
})

module.exports = function( tableName, contraints ){
    return mongoose.model( tableName, new Schema( contraints ) )
}