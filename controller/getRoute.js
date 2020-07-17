var loc = { 
    '博物馆': {  
        "longitude": 104.144738,
        "latitude":30.673695 
    },   
    '新图书馆': {   
        "longitude": 104.151463,
        "latitude":30.676275 
    },  
    '苏式建筑': {  
        "longitude": 104.143473,
        "latitude":30.675342,
    },  
    '水上图书馆': {  
        "longitude": 104.141746,
        "latitude":30.673682,
    },  
    '后街': {  
        "longitude": 104.145901,
        "latitude":30.676137,
    },  
    '东苑': {  
        "longitude": 104.152836,
        "latitude":30.68109,
    },   
    '香樟美食城': {  
        "longitude": 104.154515,
        "latitude":30.676709,
    },  
    '香樟操场': {  
        "longitude": 104.153444,
        "latitude":30.676499,
    },  
    '老操场': {  
        "longitude": 104.140423,
        "latitude":30.672235,
    },  
    '珙桐园': {  
        "longitude": 104.148693,
        "latitude":30.672269,
    },  
    '芙蓉园': {  
        "longitude": 104.144046,
        "latitude":30.676624,
    },   
    '银杏园': {  
        "longitude": 104.144591,
        "latitude":30.670579,
    },  
    '榕树园': {  
        "longitude":104.142838,
        "latitude":30.671414,
    },      
    '松林园': {  
        "longitude":104.15187,
        "latitude":30.673321,
    },  
    '香樟园': {  
        "longitude":104.154468,
        "latitude":30.675906,
    },  
    '砚湖': {  
        "longitude":104.143015,
        "latitude":30.674702,
    },  
    '第一教学楼(西区)': {  
        "longitude":104.142468,
        "latitude":30.675196,
    },  
    '第二教学楼(西区)': {  
        "longitude":104.144457,
        "latitude":30.675986,
    },  
    '第一教学楼(东区)': {  
        "longitude":104.150432,
        "latitude":30.677907,
    },  
    '第二教学楼(东区)': {  
        "longitude":104.151816,
        "latitude":30.677607,
    },  
    '第三教学楼': {  
        "longitude":104.143502,
        "latitude":30.675686,
    },  
    '第六教学楼': {  
        "longitude":104.144789,
        "latitude":30.67495,
    },  
    '第七教学楼': {  
        "longitude":104.143399,
        "latitude":30.676456,
    },  
    '第八教学楼': {  
        "longitude":104.146002,
        "latitude":30.673743,
    },  
    '第九教学楼': {  
        "longitude":104.141399,
        "latitude":30.672345,
    },  
    '西南门': {  
        "longitude":"104.138284",
        "latitude":"30.672732",
    },  
    
}
var routes = {
    'study': {
        'route':'西南门-->水上图书馆-->砚湖-->第一教学楼(西区)-->第二教学楼(西区)-->新图书馆' , 
        'loc':[ 
            [ loc['西南门'].longitude,   loc['西南门'].latitude] ,
            [ loc['水上图书馆'].longitude,   loc['水上图书馆'].latitude] ,
            [ loc['砚湖'].longitude,   loc['砚湖'].latitude] ,
            [ loc['第一教学楼(西区)'].longitude,   loc['第一教学楼(西区)'].latitude] ,
            [ loc['第二教学楼(西区)'].longitude,   loc['第二教学楼(西区)'].latitude] ,
            [ loc['新图书馆'].longitude,   loc['新图书馆'].latitude] 
        ] 
    } ,
    'food': {
        'route': '西南门-->后街-->香樟美食城-->东苑'  ,
        'loc':[ 
            [ loc['西南门'].longitude,   loc['西南门'].latitude] ,
            [ loc['后街'].longitude,   loc['后街'].latitude] ,
            [ loc['香樟美食城'].longitude,   loc['香樟美食城'].latitude] ,
            [ loc['东苑'].longitude,   loc['东苑'].latitude] 
        ] 
    } ,
    'sport': {
        'route':'西南门-->老操场-->香樟操场'  ,
        'loc':[ 
            [ loc['西南门'].longitude,   loc['西南门'].latitude] ,
            [ loc['老操场'].longitude,   loc['老操场'].latitude] ,
            [ loc['香樟操场'].longitude,   loc['香樟操场'].latitude] ,
        ] 
    } ,
    'dinosaur':{ 
        'route':'西南门-->博物馆' , 
        'loc':[ 
            [ loc['西南门'].longitude,   loc['西南门'].latitude] ,
            [ loc['博物馆'].longitude,   loc['博物馆'].latitude] ,
        ] 
    },
    'going': { 
        'route':'西南门-->老操场-->水上图书馆-->砚湖-->苏式建筑-->香樟操场' , 
        'loc':[ 
            [ loc['西南门'].longitude,   loc['西南门'].latitude] ,
            [ loc['老操场'].longitude,   loc['老操场'].latitude] ,
            [ loc['水上图书馆'].longitude,   loc['水上图书馆'].latitude] ,
            [ loc['砚湖'].longitude,   loc['砚湖'].latitude] ,
            [ loc['苏式建筑'].longitude,   loc['苏式建筑'].latitude] ,
            [ loc['香樟操场'].longitude,   loc['香樟操场'].latitude] 
        ] 
    } ,
    'dormitory': { 
        'route':'西南门-->榕树园-->银杏园-->珙桐园-->松林园-->香樟园-->芙蓉园'  ,
        'loc':[ 
            [ loc['西南门'].longitude,   loc['西南门'].latitude] ,
            [ loc['榕树园'].longitude,   loc['榕树园'].latitude] ,
            [ loc['银杏园'].longitude,   loc['银杏园'].latitude] ,
            [ loc['珙桐园'].longitude,   loc['珙桐园'].latitude] ,
            [ loc['松林园'].longitude,   loc['松林园'].latitude] ,
            [ loc['香樟园'].longitude,   loc['香樟园'].latitude] ,
            [ loc['芙蓉园'].longitude,   loc['芙蓉园'].latitude] ,
        ] 
    } ,
    'play': { 
        'route':'西南门-->水上图书馆-->砚湖' ,
        'loc':[ 
            [ loc['西南门'].longitude,   loc['西南门'].latitude] ,
            [ loc['水上图书馆'].longitude,   loc['水上图书馆'].latitude] ,
            [ loc['砚湖'].longitude,   loc['砚湖'].latitude] ,
        ] 
    } ,
}

function getRoute( req, res ){
    res.status( 200 ).json(
        {
            res_code: 0,
            data: routes[req.body.target]
        }
    )
}
module.exports = getRoute