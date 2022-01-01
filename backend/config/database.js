const mysql = require("mysql2");
const dotenv = require("dotenv")
dotenv.config({path:"backend/config/config.env"});

const pool = mysql.createPool({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

module.exports = pool.promise();