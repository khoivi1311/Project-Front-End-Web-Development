var mysql = require('mysql');

var connection = new mysql.createPool({
    host: '104.248.145.103',
    user: 'ViTK',
    port: '3306',
    password: 'ViTK@123',
    database: 'Phat_Trien_Web_Front_End',
    charset: 'utf8_general_ci'
});

connection.getConnection(function (err) {
    if (err) { console.log("Connect Database Fail !!!" + err) }
    else { console.log("Connect Database Successfull !!!") }
});

module.exports = connection;