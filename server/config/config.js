//==========================
//      PUERTO
//  ========================
process.env.PORT = process.env.PORT || 3000;


//============================
//          ENTORNO
//============================
process.env.NODE_ENV = process.env.NODE_ENV || 'dev';


//============================
//          BD
//============================
let urlDB;
if ( process.env.NODE_ENV === 'dev'){
    urlDB = 'mongodb://localhost:27017/cafe';
}else{
    // urlDB = 'mongodb+srv://brayannode:SG5KfJvvpPab34pG@cluster0-5jeqx.mongodb.net/test';
    urlDB = process.env.MONGO_URI;
}
process.env.URLDB = urlDB;