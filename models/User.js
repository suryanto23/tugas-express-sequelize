const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');
const UserInfo = require('./UserInfo')

const User = sequelize.define('user', {
    username: {
         type: DataTypes.STRING
        },
    password: DataTypes.STRING,
    birth_date: DataTypes.DATE
    } , {
        freezeTableName : true,
        timestamps:false
    }
)

User.hasOne(UserInfo)



module.exports = User