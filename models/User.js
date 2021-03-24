const {Sequelize, DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('user', {
    username: {
         type: DataTypes.STRING 
        },
    password: DataTypes.STRING,
    birth_date: DataTypes.DATE
    } , {
        freezeTableName : true
    }


)



module.exports = User