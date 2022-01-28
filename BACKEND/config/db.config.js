const mysql = require('mysql');

module.exports = {
    host: '127.0.0.1',
    user: 'jhim',
    password: 'jhim',
    database: 'rm_luxe_hotel_db',
    dialect: 'mysql',

    pool:{
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
    }
}

// const db = mysql.createPool({
//     host: '127.0.0.1',
//     user: 'jhim',
//     password: 'jhim',
//     database: 'rm_luxe_hotel_db',
// });

// db.connect((error)=>{
//     if(error) throw error;
//     console.log("Databse connected");
// })

// module.exports = db;