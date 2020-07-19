const express = require( 'express' )

//const User = require( './model/user' )

const register = require( './controller/register' ) 

const login = require( './controller/login' ) 

const Captcha = require( './controller/captcha' )

const commitComment = require( './controller/commitComment' )

const getComments = require( './controller/getComments' )

const getSchools = require( './controller/getSchools' )

const getRoute = require( './controller/getRoute' )

const upImg = require( './controller/upImg' )

const router = express.Router()

const cdut = require( './cdut.json' )

const path = require( 'path' )


router.get( '/', ( req, res ) => {
    res.send( 'hello' )
} )

router.get( '/getCaptchas', ( req, res ) => {
    // Captcha.getCaptchas( req, res,  )
    var captcha = Captcha( )
    res.cookie( "cap",  captcha.status , { maxAge:1000*60*60*24 } )
    captcha.status = 1
    res.send(captcha)
} )

router.post( '/register', ( req, res ) => {
    var uri = path.join(__dirname + "/public");
    register( req, res, uri )
} )
router.post( '/login', ( req, res ) => {
    login( req, res )
} )

router.post( '/commitComment', ( req, res ) => {
    // console.log(req.body.username, req.body.add_time,req.body.content)
    commitComment( req, res )
} )

router.post( '/getRatings', ( req, res ) => {
    // console.log(req.body.username, req.body.add_time,req.body.content)
    getComments( req, res )
} )

router.post( '/getSchools', ( req, res ) => {
    getSchools( req, res )
} )

router.post( '/getRoute', ( req, res ) => {
    getRoute( req, res )
} )

router.post( '/upImg', ( req, res ) => {
    var uri = path.join(__dirname + "/public/images/person");
    upImg( req, res, uri )
} )


router.get( '/sichuan/cdut', ( req, res ) => {
    res.json( {
        res_code:0,
        data:cdut,
    } )
} )
router.get( '/sichuan/cdut/targets', ( req, res ) => {
    res.json( {
        res_code:0,
        data:{ 'study': '学习', 'dinosaur': '恐龙化石',  'food': '美食',  'sport': '运动',  'going': '散步',  'dormitory': '寝室',   'play': '休闲玩耍' },
    } )
} )
module.exports = router