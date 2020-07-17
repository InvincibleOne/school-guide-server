function debounce( fn, delay ) {
    let timer = null;
    return function( ) {
        if ( timer ) {
            clearTimeout( timer )
        }
        timer = setTimeout( fn, delay)
    }
}

function throttle ( fn ,delay ) {
    let flag = false;
    return function( ) {
        if ( flag ) {
            return false
        }
        flag = true
        setTimeout( ( ) => {
            fn()
            flag = false
        }, delay ) 
    }
}