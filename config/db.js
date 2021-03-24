require("dotenv").config()
const {Sequelize} = require('sequelize');

const sequelize = new Sequelize({
    database : process.env.DATABASE_NAME,
    username : process.env.DATABASE_USER,
    password : process.env.DATABASE_PASS,
    host : process.env.DATABASE_HOST,
    dialect : "mysql"
})

module.exports = sequelize