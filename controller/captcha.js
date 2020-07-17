// import captchapng from 'captchapng';
const captchapng = require( 'captchapng' )

// class Captchas {
// 	constructor(){

// 	}
	//验证码
	// async getCaptchas(req, res ){
    //     const cap = parseInt(Math.random()*9000+1000);
    //     const p = new captchapng(80,30, cap);
    //     p.color(0, 0, 0, 0); 
    //     p.color(80, 80, 80, 255);
    //     const base64 = p.getBase64();
    //     res.cookie('cap',{ "cap" : cap}, { maxAge: 300000, httpOnly: true });
    //     console.log( res.cookie.cap.cap )
    //     res.send({
    //         status: 1,
    //         code: 'data:image/png;base64,' + base64
    //     });
    // }
    
// }

//module.exports = new Captchas()

module.exports = function( ) {
    const cap = parseInt(Math.random()*9000+1000);
    const p = new captchapng(80,30, cap);
    p.color(0, 0, 0, 0); 
    p.color(80, 80, 80, 255);
    const base64 = p.getBase64();
    return {
        status: cap,
        code: 'data:image/png;base64,' + base64
    }
}